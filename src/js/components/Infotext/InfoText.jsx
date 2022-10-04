import s from './InfoText.module.css';
import sprite from '../../../sprites/mobileinfo-sprite.svg';

const InfoText = () => {
    return (
        <div className={s.infoWrapper}>
        <h2 className={s.title}>Books Reading</h2>
        <p className={s.titlesecond}>Допоможе вам: </p>
        <ul className={s.infoList}>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Швидше сформулювати свою ціль і розпочати читати
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Пропорційно розподілити навантаження на кожний день
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Відстежувати особистий успіх
          </li>
        </ul>
        <p className={s.titlesecond}>Також ви зможете:</p>
        <ul className={s.infoList}>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Формувати особисту думку незалежну від інших
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Підвищити свої професійні якості опираючись на нові знання
          </li>
          <li className={s.text}>
            <svg className={s.vector} width="4" height="8">
              <use href={sprite + '#icon-Vector'}></use>
            </svg>
            Стати цікавим співрозмовником
          </li>
        </ul>
      </div>
    )
}
export default InfoText