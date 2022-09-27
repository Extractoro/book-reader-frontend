import '../../../sass/components/UserMenu/UserMenu.css';

export default function UserMenu() {
  return (
    <div className="menu-container">
      <div className="user-box">
        <h3 className="user-name">M</h3>
      </div>

      {/* <img src={name.split('')[0]} alt="" width="32px" className="avatar-img" /> */}
      {/* <span className="name-title"> {name}</span> */}
      <button type="button" className="menu-button">
        Вихід
      </button>
    </div>
  );
}
