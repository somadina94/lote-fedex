import { Link } from 'react-router-dom';
import classes from './Dropdown.module.css';

const Dropdown3 = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">Explore Print, Products & Design</Link>
      <Link to="/">Browse Services</Link>
      <Link to="/">VISIT NEW MARKETPLACE</Link>
    </nav>
  );
};

export default Dropdown3;
