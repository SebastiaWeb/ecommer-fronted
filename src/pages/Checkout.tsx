import { useDispatch } from "react-redux";
import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Button from "../components/Button/Button";
import CreditCard from "../components/CreditCard/CreditCard";
import InputPersonalized from "../components/Input/Input";
import { setCardNumber, setExpirationDate, setCvv, setCardHolder, selectCardNumber } from '../components/Input/slice/creditCardSlice';

function Checkout() {
  const dispatch = useDispatch();
  const handleCardNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setCardNumber(input.value));
  };

  const handleExpireData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setExpirationDate(input.value));
  };

  const handleCvv = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setCvv(input.value));
  };
  const handleCardHolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setCardHolder(input.value));
  };
  
  return (
    <div>
      <Navbar />
      <Body>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="container row container-generic row p-md-5 justify-content-center align-items-start pt-4 mb-5">
            <div className="row justify-content-center col-12 col-lg-4 g-0 mb-md-3 mb-md-0" >
              <CreditCard />
            </div>
            <div className="col-12 col-lg-6 mt-md-0">
              <div className="col-12 col-lg-12 mt-5 mt-md-0">
                <div className="containerForm row g-0 justify-content-center">
                  <InputPersonalized type="number" placeholder="Card Number" onChange={() => {}} formato="tarjeta" maxLength={19} keyUp={handleCardNumber}/>
                  <div className="col-12 row p-0 g-0">
                    <div className="col-6 p-0 pe-1">
                      <InputPersonalized type="text" placeholder="Expired Date" onChange={() => {}} formato="mm/yy" maxLength={5} keyUp={handleExpireData}/>
                    </div>
                    <div className="col-6 p-0 ps-1">
                      <InputPersonalized type="number" placeholder="CVV" onChange={() => {}} maxLength={3} formato="number" keyUp={handleCvv}/>
                    </div>
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="Name" onChange={() => {}} formato="text" keyUp={handleCardHolder}/>
                  </div>
                </div>
              </div>

              {/* FORM TWO */}

              <div className="col-12 col-lg-12 mt-3 mt-md-3 mt-lg-3 mb-5 mb-lg-0">
                <div className="containerForm row g-0 justify-content-center">
                  <InputPersonalized type="text" placeholder="NAME" onChange={() => {}} formato="text"/>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="LAST NAME" onChange={() => {}} formato="text"/>
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="email" placeholder="Email" onChange={() => {}} formato="email"/>
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="PHONE" maxLength={12} onChange={() => {}} formato="text"/>
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="STREET" onChange={() => {}} formato="text"/>
                  </div>
                  <div className="col-12 d-flex justify-content-center g-0">
                  <Button />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Body>
      <div className="mt-5"></div>
      <div className="mt-3"></div>
      <Footer />
    </div>
  );
}

export default Checkout;