import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Button from "../components/Button/Button";

function Products() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Body>
        <div className="container row">
          <div className="gallery col-md-12 col-lg-6">
            <img
              src="https://placehold.co/500x400"
              alt="gallery"
              className="img-fluid"
            />
          </div>
          <div className="info-products col-md-12 col-lg-6">
            <div className="d-flex justify-content-between">
              <div className="info-products-title">
                <h3>Products</h3>
              </div>
              <div>
                <Button />
              </div>
            </div>
            <div className="info-products-price">
              <h5>$ 999.99</h5>
            </div>
            <div className="p-3 info-products-description">
              <span className="">Shipping Information</span>
              <p className="title-info-products-description">
                <ul>
                  <li>Standard shipping: <span className="info-color-black">3-5 business days</span></li>
                  <li>Express shipping options available at checkout</li>
                </ul>
              </p>
            </div>
            <div className="p-3 info-products-description">
              <span className="">Features</span>
              <p className="title-info-products-description">
                <ul>
                  <li>Distressed detailing for a rugged look</li>
                  <li>Button-up front closure with engraved metal buttons</li>
                  <li>Two side pockets for added functionality</li>
                  <li>Adjustable buttoned cuffs for a personalized fit</li>
                  <li>Back waist tabs for customizable styling</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default Products;
