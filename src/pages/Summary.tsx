import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import succesIcon from "../assets/success-Icon.svg";

function Summary() {
  return (
    <div>
      <Navbar />
      <Body>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="container row container-generic row p-md-5 justify-content-center align-items-center pt-4 mb-5">
            <div className="container-white row col-12 col-md-10 col-lg-6 p-4 bg-white justify-content-center mb-5 mb-lg-0">
              <div className="col- d-flex justify-content-center">
                <img src={succesIcon} alt="Succes Icon" />
              </div>
              <div className="col-12 pt-3">
                <p className="text-center p-0">Payment Success!</p>
              </div>
              <div className="col-12">
                <p className="text-center fs-3 fw-bold ">IDR 1,000,000</p>
              </div>
              <div className="col-12 py-4">
                <hr className="line-divisor" />
              </div>
              <div className="row col-12">
                <div className="col-6">
                  <p className="text-start label-transaction">Transaction ID</p>
                </div>
                <div className="col-6">
                  <p className="text-end value-transaction">1234567890</p>
                </div>
              </div>
              <div className="row col-12">
                <div className="col-6">
                  <p className="text-start label-transaction">Payment Time</p>
                </div>
                <div className="col-6">
                  <p className="text-end value-transaction">25-02-2023, 13:22:16</p>
                </div>
              </div>
              <div className="row col-12">
                <div className="col-6">
                  <p className="text-start label-transaction">Payment Method</p>
                </div>
                <div className="col-6">
                  <p className="text-end value-transaction">Credit Card</p>
                </div>
              </div>
              <div className="row col-12">
                <div className="col-6">
                  <p className="text-start label-transaction">Sender Name</p>
                </div>
                <div className="col-6">
                  <p className="text-end value-transaction">Antonio Roberto</p>
                </div>
              </div>
              <div className="col-12 line-divisor-dotted mb-3"></div>
              <div className="row col-12">
                <div className="col-6">
                  <p className="text-start label-transaction">Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-end value-transaction">IDR 1,000,000</p>
                </div>
              </div>
              <div className="row col-12">
                <div className="col-6">
                  <p className="text-start label-transaction">Admin Fee</p>
                </div>
                <div className="col-6">
                  <p className="text-end value-transaction">IDR 193.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
}
export default Summary;
