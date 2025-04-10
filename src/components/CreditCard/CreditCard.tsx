import './index.css';
import chip from '../../assets/chip.png';
import visa from '../../assets/visa.svg';
import mastercard from '../../assets/mastercard.png';
import { selectCardNumber } from '../Input/slice/creditCardSlice';
import { useSelector } from 'react-redux';

function CreditCard(){
    const cardNumber = useSelector(selectCardNumber);

    return(
        <div className="creditCardContainer row m-0">
            <div className="col-12 d-flex justify-content-end m-0 p-3 g-0">
                <img src={visa} alt="" />
            </div>
            <div className="col-12">
                <img src={chip} alt="" />
            </div>
            <div className="col-12">
                <h1 className="cardNumber">{cardNumber}</h1>
            </div>
            <div className="col-12 d-flex justify-content-evenly">
                <div className="col-8"><p className='p-0 m-0'>Name</p> <p>SEBASTIAN CARMONA</p></div>
                <div className="col-4"><p className='p-0 m-0'>Expired data</p> <p>12/25</p></div>
            </div>

        </div>
    )

}

export default CreditCard;