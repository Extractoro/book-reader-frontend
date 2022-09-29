import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
