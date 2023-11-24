import { Link } from 'react-router-dom';

import classes from './Section3.module.css';
import s31 from '../../../images/s31.png';
import s32 from '../../../images/s32.png';
import s33 from '../../../images/s33.png';
import s34 from '../../../images/s34.png';
import s35 from '../../../images/s35.png';
import clock from '../../../images/clock.png';

const Section3 = () => {
  return (
    <div className={classes.section}>
      <h2>Manage your shipments and returns</h2>
      <div className={classes.manage}>
        <div className={classes.content}>
          <img src={s31} alt="manage" />
          <Link to="/">
            DROP OFF A<br />
            PACKAGE
          </Link>
        </div>
        <div className={classes.content}>
          <img src={s32} alt="manage" />
          <Link to="/">
            REDIRECT A<br />
            PACKAGE
          </Link>
        </div>
        <div className={classes.content}>
          <img src={s33} alt="manage" />
          <Link to="/">
            STORE HOURS
            <br />
            AND SERVICES
          </Link>
        </div>
        <div className={classes.content}>
          <img src={s34} alt="manage" />
          <Link to="/">
            SERVICE
            <br />
            ALERTS
          </Link>
        </div>
        <div className={classes.content}>
          <img src={s35} alt="manage" />
          <Link to="/">
            RETURN A<br />
            PACKAGE
          </Link>
        </div>
      </div>
      <div className={classes.holiday}>
        <div className={classes.clock}>
          <img src={clock} alt="clock" />
        </div>
        <div className={classes['holiday-content']}>
          <h2>Send holiday gifts in time</h2>
          <p>
            Use our 2023 holiday shipping schedule to stay on track. See the
            last days you can ship with FedEx for arrival in time for the
            holidays.
          </p>
          <Link to="/">VIEW THE SCHEDULE</Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
