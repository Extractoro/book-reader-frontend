// import { useState } from 'react';
// import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import '../../../sass/pages/InfoMobile/InfoMobile.css';

function InfoMobile() {
  return (
    <section className="infomobile">
      <div className="sectionInfoMobile">
        <h2 className="title">Books Reading</h2>
        <p className="titlesecond">Допоможе вам</p>
        <ul>
          <li className="text">
            Швидше сформулювати свою ціль і розпочати читати
          </li>
          <li className="text">
            Пропорційно розподілити навантаження на кожний день
          </li>
          <li className="text">Відстежувати особистий успіх</li>
        </ul>
        <p className="titlesecond">Також ви зможете </p>
        <ul>
          <li className="text">Формувати особисту думку незалежну від інших</li>
          <li className="text">
            Підвищити свої професійні якості опираючись на нові знання
          </li>
          <li className="text">Стати цікавим співрозмовником</li>
        </ul>
      </div>
      <div className="buttonSection">
        <NavLink to="/login">
          <button type="submit" className="buttonFirst">
            Увійти
          </button>
        </NavLink>
        <NavLink to="/register">
          <button type="submit" className="buttonSecond">
            Реєстрація
          </button>
        </NavLink>
      </div>
    </section>
  );
}

export default InfoMobile;
