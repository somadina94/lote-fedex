import { Link } from 'react-router-dom';
import classes from './Dropdown.module.css';

const Dropdown1 = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">Create a Shipment</Link>
      <Link to="/">Shipping Dates & Delivery Times</Link>
      <Link to="/">Schedule & Manage Pickups</Link>
      <Link to="/">Packing & Shipping Supplies</Link>
      <Link to="/">International Shipping Guide</Link>
      <Link to="/">Freight</Link>
      <Link to="/">ALL SHIPPING SERVICES</Link>
    </nav>
  );
};

export default Dropdown1;
