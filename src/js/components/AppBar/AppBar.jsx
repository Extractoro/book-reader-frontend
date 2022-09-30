import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import s from './AppBar.module.css';
import { useMatchMedia } from '../../../hooks/use-match-media';

export default function AppBar() {
  const { isTablet, isDesktop } = useMatchMedia();

  return (
    <>
      <header className={s['header']}>
        <h1 className={s['header-label']}>BR</h1>
        {isTablet && <h3 className={s['user-name']}>M</h3>}
        {isDesktop && <h3 className={s['user-name']}>M</h3>}
        <div className={s['nav-bar']}>
          <Navigation />
          <UserMenu />
        </div>
      </header>
    </>
  );
}
