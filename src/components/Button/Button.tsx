import './index.css';
import buy from '../../assets/buy.svg';
import { useNavigate } from 'react-router-dom';


interface ButtonProps {
  id?: string; // Define the type of the id prop as a string
  onClick?: () => void; // Optional onClick prop for additional functionality
}

function Button({ id, onClick }: ButtonProps) {
  // const location = useLocation(); // Get the location object from the router
  const navigate = useNavigate();

  // Function to handle button click
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function if provided
    } else {
      navigate('/checkout', { state: { id } }); // Navigate to the checkout page with the id passed through the router
    }
  };

  return <button className="buttonGeneric row align-items-center" onClick={handleClick}><img src={buy} className="col-3 p-0" /> <p className='col-9 m-0 p-0'> Buy Now</p></button>;
}

export default Button;
