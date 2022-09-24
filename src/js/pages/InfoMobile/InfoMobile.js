import { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';

function InfoMobile() {
  let [showModal, 
    // setShowModal
] = useState(true);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={showModal}
    //   onRequestClose={() => {
    //     setShowModal(false);
    //   }}
        >
      <h2>Books Reading</h2>
      <p>Допоможе вам</p>
      <ul>
        <li>Швидше сформулювати свою ціль і розпочати читати</li>
        <li>Пропорційно розподілити навантаження на кожний день</li>
        <li>Відстежувати особистий успіх</li>
      </ul>
      <p>Також ви зможете </p>
      <ul>
        <li>Формувати особисту думку незалежну від інших</li>
        <li>Підвищити свої професійні якості опираючись на нові знання</li>
        <li>Стати цікавим співрозмовником</li>
      </ul>
      <NavLink to="/login">
        <button type="submit">Увійти</button>
      </NavLink>
      <NavLink to="/register">
        <button type="submit">Реєстрація</button>
      </NavLink>
    </Modal>
  );
}
export default InfoMobile;