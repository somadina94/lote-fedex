import classes from './Section4.module.css';
import s41 from '../../../images/s41.webp';
import s42 from '../../../images/s42.webp';
import s43 from '../../../images/s43.webp';
import s44 from '../../../images/s44.webp';
import { Link } from 'react-router-dom';

const Section4 = () => {
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>
        Ready and waiting to help you with the holidays
      </h2>
      <div className={classes.content}>
        <div className={classes.photo}>
          <img src={s41} alt="holidayPhoto" />
        </div>
        <div className={classes.info}>
          <h2>Convenient deliveries, no matter where you are</h2>
          <p>
            You may not always be home for the holidays, but FedEx Delivery
            Manager® is. Request to redirect a delivery to a{' '}
            <Link to="/">FedEx location</Link>, then pick it up while you're out
            and about. Or place a free vacation hold for up to 14 days to keep
            packages off your porch.
          </p>
          <button>ENROLL FOR FREE</button>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <h2>Ship with confidence on the go</h2>
          <p>
            Save time with the FedEx® Mobile app by creating a shipping label on
            your phone. You'll get a QR code you can bring to a{' '}
            <Link to="/">FedEx Office location</Link>. Let us print it and ship
            your package.
          </p>
          <button>DOWNLOAD THE APP</button>
        </div>
        <div className={classes.photo}>
          <img src={s42} alt="holidayPhoto" />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <img src={s43} alt="holidayPhoto" />
        </div>
        <div className={classes.info}>
          <h2>Send holiday cheer early</h2>
          <p>
            With service 7 days a week*, FedEx Home Delivery® makes holiday
            shipping so simple. Get reliable delivery in 1-5 days (3-7 days in
            Alaska and Hawaii). If you're shipping to a business,{' '}
            <Link to="/">use FedEx Ground</Link>. It's faster to more locations
            than UPS Ground.
          </p>
          <button>GET HOME DELIVERY</button>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <h2>Drop off gifts while you shop for more</h2>
          <p>
            Holiday shopping isn't always a one-and-done job. Drop off packages
            at retail locations like FedEx Office, Walgreens, Dollar General,
            and select grocery locations. Then, keep shopping for who's left on
            your list.
          </p>
          <button>FIND LOCATIONS</button>
        </div>
        <div className={classes.photo}>
          <img src={s44} alt="holidayPhoto" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
