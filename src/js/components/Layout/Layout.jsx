import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import ModalLogout from '../../components/ModalLogout/ModalLogout';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <ModalLogout />
    </div>
  );
};
