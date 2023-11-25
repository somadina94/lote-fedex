import classes from './Header.module.css';
import logo from '../../images/logo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
