import {Link} from 'react-router-dom'
import s from './AddBookRead.module.css'
import Media from 'react-media';
const AddBookRead=()=>{
  return(
    <div className={s['thumbBtn']}>
      <Media queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px) and (max-width: 2100px)",
      }}>
        {matches => (

            <Link to='/addBook' className={s['thumb']}>
            {matches.small && <p>+</p>}
            {matches.medium && <p>Почати тренування</p>}

            </Link>
        )}

      </Media>
    </div>







  )
}

export default AddBookRead

