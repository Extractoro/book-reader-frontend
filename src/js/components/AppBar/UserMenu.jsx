import s from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={s['menu-container']}>
      <div className={s['user-box']}>
        <h3 className={s['user-name']}>M</h3>
      </div>

      {/* <img src={name.split('')[0]} alt="" width="32px" className="avatar-img" /> */}
      {/* <span className="name-title"> {name}</span> */}
      <button type="button" className={s['menu-button']}>
        Вихід
      </button>
    </div>
  );
}
