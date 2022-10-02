import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import s from './AppBar.module.css';
import { useMatchMedia } from '../../../hooks';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectCurrentUser } from 'js/redux/auth/auth-slice';

export default function AppBar() {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isTablet, isDesktop } = useMatchMedia();

  // const userName = () => name.map(name => name);

  return (
    <>
      <header className={s['header']}>
        {!isLoggedIn ? (
          <h1 className={s['header-label']}>BR</h1>
        ) : (
          <>
            <h1 className={s['header-label']}>BR</h1>
            {isTablet && (
              <div className={s['name-box']}>
                <h3 className={s['user-name']}>{user.name}</h3>
                <span className={s['name-title']}>{user.name}</span>
              </div>
            )}
            {isDesktop && (
              <div className={s['name-box']}>
                <h3 className={s['user-name']}>{user.name}</h3>
                <span className="name-title">{user.name}</span>
              </div>
            )}
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
