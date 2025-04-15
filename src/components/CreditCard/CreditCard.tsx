import './index.css';
import chip from '../../assets/chip.png';
import visa from '../../assets/visa.svg';
import mastercard from '../../assets/mastercard.svg';
import { selectCardHolder, selectCardNumber, selectExpirationDate } from '../Input/slice/creditCardSlice';
import { useSelector } from 'react-redux';

function CreditCard(){
    let cardNumber = useSelector(selectCardNumber);
    let cardNombre = useSelector(selectCardHolder);
    let cardExpirate = useSelector(selectExpirationDate);
    const cardType = cardNumber.substring(0, 1) === '4' ? visa : mastercard;
    const width = cardNumber.substring(0, 1) === '4' ? "48px" : "48px";
    const cardNumberFormat = cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();;
    // const selectCvv = useSelector(selectCvv);
     cardNumber = cardNumberFormat.length > 0 ? cardNumberFormat : 'XXXX XXXX XXXX XXXX';
     cardExpirate = cardExpirate.length > 0 ? cardExpirate : 'MM/YY';
    cardNombre = cardNombre.length > 0 ? cardNombre : 'CARDHOLDER NAME';
    return(
        <div className="creditCardContainer row m-0">
            <div className="col-12 d-flex justify-content-end m-0 p-3 g-0">
                <img src={cardType} alt="" width={width} height={width}/>
            </div>
            <div className="col-12">
                <img src={chip} alt="" />
            </div>
            <div className="col-12">
                <h1 className="cardNumber">{cardNumberFormat}</h1>
            </div>
            <div className="col-12 d-flex justify-content-evenly">
                <div className="col-8"><p className='p-0 m-0'>Name</p> <p>{cardNombre}</p></div>
                <div className="col-4"><p className='p-0 m-0'>Expired data</p> <p>{cardExpirate}</p></div>
            </div>

        </div>
    )

}

export default CreditCard;