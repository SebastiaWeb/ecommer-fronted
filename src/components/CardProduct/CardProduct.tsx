import './index.css';
import shop from '../../assets/shop.svg';
import { useNavigate } from 'react-router-dom';

interface Product {
  id:string;
  image?: string;
  name: string;
  price: number;
  url: string;
}

function CardProduct({ name, price, url, id }: Product) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products', {state: {id:id}});
  };

  return (
    <div className="card-product col-6 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
        <div className="container-img d-flex justify-content-center align-items-center">
          <img src={url} alt={name} className="img-product img-fluid" />
          <img src={shop} className='img-shop' onClick={handleClick}/>
        </div>
      <p className="mt-2 m-0 name-product">{name}</p>
      <p className="price-product">$ {price}</p>
    </div>
  );
}

export default CardProduct;