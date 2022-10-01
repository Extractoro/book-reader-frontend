import { selectIsLoggedIn } from 'js/redux/auth/auth-slice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to="/library" replace={true} />
  ) : (
    <Outlet />
  );
}
