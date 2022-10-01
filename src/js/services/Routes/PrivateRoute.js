import { selectIsLoggedIn } from 'js/redux/auth/auth-slice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace={true} />;
}
