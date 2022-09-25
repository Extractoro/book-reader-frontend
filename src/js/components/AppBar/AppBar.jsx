import Navigation from './Navigation';
import '../../../sass/components/AppBar/AppBar.css';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <header className="header">
        <h1 className="label">BR</h1>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}
