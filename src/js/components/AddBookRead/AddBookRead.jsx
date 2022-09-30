import {Link} from 'react-router-dom'
import s from './AddBookRead.module.css'
import Media from 'react-media';
const AddBookRead=()=>{
  return(
    <div className={s['thumbBtn']}>
      <Media queries={{

        medium: "(min-width: 768px) and (max-width: 2100px)",
      }}>
        {matches => (
            <>
                {matches.medium && <Link   className={s['thumb']}><p>Почати тренування</p></Link>}
            </>

        )}

      </Media>
    </div>







  )
}

export default AddBookRead

