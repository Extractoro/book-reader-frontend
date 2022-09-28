import Navigation from './Navigation';
import UserMenu from './UserMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <>
      <header className={s['header']}>
        <h1 className={s['header-label']}>BR</h1>
        <Navigation />
        <UserMenu />
      </header>
    </>
  );
}
