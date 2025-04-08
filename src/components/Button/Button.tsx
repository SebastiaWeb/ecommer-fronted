import './index.css';
import buy from '../../assets/buy.svg';

function Button() {
  return <button className="buttonGeneric row align-items-center"><img src={buy} className="col-3 p-0"/> <p className='col-9 m-0 p-0'> Buy Now</p></button>;
}

export default Button;
