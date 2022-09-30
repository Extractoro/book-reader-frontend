import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import s from './AppBar.module.css';
import { useMatchMedia } from '../../../hooks';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'js/redux/auth/auth-slice';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isTablet, isDesktop } = useMatchMedia();

  return (
    <>
      <header className={s['header']}>
        {!isLoggedIn ? (
          <h1 className={s['header-label']}>BR</h1>
        ) : (
          <>
            <h1 className={s['header-label']}>BR</h1>
            {isTablet && <h3 className={s['user-name']}>M</h3>}
            {isDesktop && <h3 className={s['user-name']}>M</h3>}
            <div className={s['nav-bar']}>
              <Navigation />
              <UserMenu />
            </div>
          </>
        )}
      </header>
    </>
  );
}
