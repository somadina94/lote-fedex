import { Link } from 'react-router-dom';
import classes from './Dropdown.module.css';

const Dropdown4 = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">Explore Print, Products & Design</Link>
      <Link to="/">FIND A LOCATION</Link>
    </nav>
  );
};

export default Dropdown4;
