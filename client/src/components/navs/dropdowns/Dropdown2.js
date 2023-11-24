import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

import classes from './Dropdown.module.css';

const Dropdown2 = () => {
  return (
    <nav className={classes.nav}>
      <form className={classes.form}>
        <label>Tracking Id</label>
        <input type="text" />
        <button type="submit">
          <span>TRACK</span>
          <HiOutlineArrowRight />
        </button>
      </form>
      <Link to="/">Advanced Shipment Tracking</Link>
      <Link to="/">Manage Your Delivery</Link>
      <Link to="/">Manage a Return</Link>
      <Link to="/">ALL TRACKING SERVICES</Link>
    </nav>
  );
};

export default Dropdown2;
