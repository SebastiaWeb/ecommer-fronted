import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import CreditCard from "../components/CreditCard/CreditCard";
import InputPersonalized from "../components/Input/Input";

function Checkout() {
  return (
    <div>
      <Navbar />
      <Body>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="container row container-generic row p-md-5 justify-content-center align-items-center pt-4 mb-5">
            <div className="row justify-content-center col-12 col-lg-6 g-0 mb-md-3 mb-md-0" >
              <CreditCard />
            </div>
            <div className="col-12 col-lg-6 mt-md-0">
              <div className="col-12 col-lg-12 mt-5 mt-md-0">
                <div className="containerForm row g-0 justify-content-center">
                  <InputPersonalized type="number" placeholder="Card Number" />
                  <div className="col-12 row p-0 g-0">
                    <div className="col-6 p-0 pe-1">
                      <InputPersonalized type="text" placeholder="Expired Date" />
                    </div>
                    <div className="col-6 p-0 ps-1">
                      <InputPersonalized type="number" placeholder="CVV" />
                    </div>
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="Name" />
                  </div>
                </div>
              </div>

              {/* FORM TWO */}

              <div className="col-12 col-lg-12 mt-3 mt-md-3 mt-lg-3 mb-5 mb-lg-0">
                <div className="containerForm row g-0 justify-content-center">
                  <InputPersonalized type="text" placeholder="NAME" />
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="LAST NAME" />
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="PHONE" />
                  </div>
                  <div className="col-12">
                    <InputPersonalized type="text" placeholder="STREET" />
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