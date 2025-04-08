import './index.css';
import shop from '../../assets/shop.svg';

function CardProduct({ name, price, url }: { name: string; price: number; url:string; }) {

  return (
    <div className="card-product m-3">
        <div className="container-img d-flex justify-content-center align-items-center">
          <img src={url} alt={name} className="img-product img-fluid" />
          <img src={shop} className='img-shop' />
        </div>
      <p className="mt-2 m-0 name-product">{name}</p>
      <p className="price-product">$ {price}</p>
    </div>
  );
}

export default CardProduct;