import { CgProfile } from 'react-icons/cg';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

import classes from './SideNav.module.css';

const SideNav = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <span>Sign Up or Log In</span>
        <CgProfile className={classes.icon} />
      </Link>
      <IoIosSearch className={classes.icon} />
    </nav>
  );
};

export default SideNav;
