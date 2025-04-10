import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import CardProduct from "../components/CardProduct/CardProduct";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Body>
        <div className="container container-products p-5">
          <div>
            <h1 className="text-left">PRODUCTS</h1>
          </div>
          <div className="row justify-content-center pt-4 pb-5 mb-5">
            <CardProduct id="1" name="Mouse inalambrico" price={49.99} url="https://pngimg.com/d/computer_mouse_PNG7688.png"/>
            <CardProduct id="2" name="Teclado" price={30.99} url="https://www.pngplay.com/wp-content/uploads/9/Keyboard-PNG-HD-Quality.png"/>
            <CardProduct id="3" name="PC GAMER" price={999.99} url="https://shopinfo.vteximg.com.br/arquivos/ids/1611779-1000-1000/1.png?v=638573331208230000"/>
          </div>
        </div>
      </Body>
      
      <Footer />
    </div>
  );
}

export default Home;