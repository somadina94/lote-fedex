import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import classes from './Nav.module.css';
import Dropdown1 from '../dropdowns/Dropdown1';
import Dropdown2 from '../dropdowns/Dropdown2';
import Dropdown3 from '../dropdowns/Dropdown3';
import Dropdown4 from '../dropdowns/Dropdown4';
import Dropdown5 from '../dropdowns/Dropdown5';

const Nav = () => {
  const [activeNav, setActiveNav] = useState(null);

  const handleMouseOver = (nav) => {
    setActiveNav(nav);
  };

  const handleMouseOut = () => {
    setActiveNav(null);
  };

  const isNavActive = (nav) => {
    return nav === activeNav ? classes.mouseOver : '';
  };

  return (
    <nav className={classes.nav}>
      <button
        type="button"
        onMouseEnter={() => handleMouseOver('Shipping')}
        onMouseLeave={handleMouseOut}
        className={`${classes.navButton} ${isNavActive('Shipping')}`}
      >
        <span>Shipping</span>
        <IoIosArrowDown className={classes.icon} />
        {activeNav === 'Shipping' && (
          <div className={classes.dropdown}>
            <Dropdown1 />
          </div>
        )}
      </button>
      <button
        type="button"
        onMouseEnter={() => handleMouseOver('Tracking')}
        onMouseLeave={handleMouseOut}
        className={`${classes.navButton} ${isNavActive('Tracking')}`}
      >
        <span>Tracking</span>
        <IoIosArrowDown className={classes.icon} />
        {activeNav === 'Tracking' && (
          <div className={classes.dropdown}>
            <Dropdown2 />
          </div>
        )}
      </button>

      <button
        type="button"
        onMouseEnter={() => handleMouseOver('DesignPrint')}
        onMouseLeave={handleMouseOut}
        className={`${classes.navButton} ${isNavActive('DesignPrint')}`}
      >
        <span>Design & Print</span>
        <IoIosArrowDown className={classes.icon} />
        {activeNav === 'DesignPrint' && (
          <div className={classes.dropdown}>
            <Dropdown3 />
          </div>
        )}
      </button>

      <button
        type="button"
        onMouseEnter={() => handleMouseOver('Locations')}
        onMouseLeave={handleMouseOut}
        className={`${classes.navButton} ${isNavActive('Locations')}`}
      >
        <span>Locations</span>
        <IoIosArrowDown className={classes.icon} />
        {activeNav === 'Locations' && (
          <div className={classes.dropdown}>
            <Dropdown4 />
          </div>
        )}
      </button>

      <button
        type="button"
        onMouseEnter={() => handleMouseOver('Support')}
        onMouseLeave={handleMouseOut}
        className={`${classes.navButton} ${isNavActive('Support')}`}
      >
        <span>Support</span>
        <IoIosArrowDown className={classes.icon} />
        {activeNav === 'Support' && (
          <div className={classes.dropdown}>
            <Dropdown5 />
          </div>
        )}
      </button>
    </nav>
  );
};

export default Nav;
