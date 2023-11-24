import { useNavigate } from 'react-router-dom';

import classes from './Header.module.css';
import logo from '../../images/logo.png';
import Nav from '../navs/main-navs/Nav';
import SideNav from '../navs/main-navs/SideNav';

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  return (
    <header className={classes.header}>
      <div className={classes.navContainer}>
        <div className={classes.logo} onClick={goHome}>
          <img src={logo} alt="Fedex logo" />
        </div>
        <Nav />
        <SideNav />
      </div>
    </header>
  );
};

export default Header;
