
import s from '../../../sass/components/_Container.scss'

const Container = ({children}) => {
  return (
    <div className={s['container']}>{
      children}
    </div>)
}

export default Container