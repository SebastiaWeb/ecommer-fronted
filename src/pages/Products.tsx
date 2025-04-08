import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function Products() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Body></Body>
        <Footer />
      </div>
    );
  }
  
  export default Products;