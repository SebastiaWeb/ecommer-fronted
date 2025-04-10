import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Button from "../components/Button/Button";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const { id } = location.state || {}; // Get the id from the state passed through the router 
  console.log(id); // Log the id to the console for debugging
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Body>
        <div className="container row m-0 mb-5 pb-5 mb-lg-0 pb-lg-0">
          <div className="d-flex col-12 col-md-12 col-lg-6 justify-content-center align-items-center">
            <img
              src="https://placehold.co/500x400"
              alt="gallery"
              className="img-fluid"
            />
          </div>
          <div className="row col-md-12 col-lg-6">
            <div className="row justify-content-between">
              <div className="info-products-title mt-3 mt-lg-0  col-12 col-md-8">
                <h3>Products</h3>
              </div>
              <div className="my-3 my-lg-0 col-12 col-md-4 d-flex justify-content-md-end align-items-center">
                <Button />
              </div>
            </div>
            <div className="info-products-price col-12 col-md-3">
              <h5>$ 999.99</h5>
            </div>
            <div className="p-3 mb-3 info-products-description">
              <span className="">Shipping Information</span>
              <div className="title-info-products-description">
                <ul>
                  <li>Standard shipping: <span className="info-color-black">3-5 business days</span></li>
                  <li>Express shipping options available at checkout</li>
                </ul>
              </div>
            </div>
            <div className="p-3 mb-3 info-products-description">
              <span className="">Features</span>
              <div className="title-info-products-description">
                <ul>
                  <li>Distressed detailing for a rugged look</li>
                  <li>Button-up front closure with engraved metal buttons</li>
                  <li>Two side pockets for added functionality</li>
                  <li>Adjustable buttoned cuffs for a personalized fit</li>
                  <li>Back waist tabs for customizable styling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Body>
      <div className="pb-5 pb-lg-0"></div>
      <Footer />
    </div>
  );
}

export default Products;
