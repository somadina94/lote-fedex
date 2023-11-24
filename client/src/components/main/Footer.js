import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import region from '../../images/footer-language.png';
import social from '../../images/social.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.navs}>
          <div className={classes.content}>
            <h4 className={classes.title}>OUR COMPANY</h4>
            <div className={classes.links1}>
              <Link to="/">About FedEx</Link>
              <Link to="/">Our Portfolio</Link>
              <Link to="/">Investor Relations</Link>
              <Link to="/">Careers</Link>
              <Link to="/">FedEx Blog</Link>
              <Link to="/">Corporate Responsibility</Link>
              <Link to="/">Newsroom</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
          <div className={classes.content}>
            <h4 className={classes.title}>MORE FROM FEDEX</h4>
            <div className={classes.links2}>
              <Link to="/">FedEx Compatible</Link>
              <Link to="/">FedEx Developer Portal</Link>
              <Link to="/">FedEx Logistics</Link>
              <Link to="/">ShopRunner</Link>
            </div>
          </div>
          <div className={classes.content}>
            <h4 className={classes.title}>LANGUAGE</h4>
            <img alt="region" src={region} />
          </div>
        </div>
        <div className={classes.social}>
          <img src={social} alt="social media" />
        </div>
      </div>
      <div className={classes.foot}>
        <p>© FedEx 1995-2023</p>
        <nav className={classes['foot-nav']}>
          <Link to="/">Site Map</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy & Security</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
