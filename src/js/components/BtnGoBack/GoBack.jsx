import {useLocation,useNavigate} from 'react-router-dom';

 const BtnGoBack=()=>{
  const location=useLocation()
  const navigate=useNavigate()
  console.log(navigate);

  const handleClick=()=>{
    navigate(location?.state?.from?? '/')
  }

  return(
    <button type='button' onClick={handleClick}>Go Back</button>
  )

}
export default BtnGoBack
