import { Link } from 'react-router-dom';
import classes from './Dropdown.module.css';

const Dropdown5 = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">Small Business Center</Link>
      <Link to="/">FedEx Service Guide</Link>
      <Link to="/">Account Management Tools</Link>
      <Link to="/">Frequently Asked Questions</Link>
      <Link to="/">File a Claim</Link>
      <Link to="/">Billing & Invoicing</Link>
      <Link to="/">VISIT NEW MARKETPLACE</Link>
    </nav>
  );
};

export default Dropdown5;
