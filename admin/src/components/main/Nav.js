import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link to="create-shipment">Create Shipment</Link>
      <Link to="shipments">View Shipemts</Link>
    </nav>
  );
};

export default Nav;
