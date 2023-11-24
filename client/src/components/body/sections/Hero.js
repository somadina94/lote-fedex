import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Hero.module.css';

import rateShip from '../../../images/rateship.png';
import track from '../../../images/track.png';
import locations from '../../../images/location.png';
import { trackShipment } from '../../../api/api';

const Hero = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const handleTracking = async () => {
    const res = await trackShipment(trackingId);
    if (res.status === 'success') {
      navigate(`/tracking/${trackingId}`);
    } else {
      setStatus(false);
      setTimeout(() => {
        setStatus(true);
      }, 4000);
    }
  };

  const handleTrackingIdChanged = (e) => {
    setTrackingId(e.target.value);
  };

  return (
    <div className={classes.hero}>
      {!status && (
        <p className={classes.error}>
          Invalid tracking Id, shipment not found!
        </p>
      )}
      <div className={classes.container}>
        <h1>Ship, manage, track, deliver</h1>
        <nav className={classes.nav}>
          <Link to="/" className={classes.rate}>
            <img src={rateShip} alt="rate and ship" />
            <span>RATE & SHIP</span>
          </Link>
          <Link to="/" className={classes.trackIcon}>
            <img src={track} alt="rate and ship" />
            <span>TRACK</span>
          </Link>
          <Link to="/" className={classes.location}>
            <img src={locations} alt="rate and ship" />
            <span>LOCATIONS</span>
          </Link>
        </nav>
        <div className={classes.track}>
          <input
            type="text"
            placeholder="TRACKING ID"
            value={trackingId}
            onChange={handleTrackingIdChanged}
          />
          <button type="button" onClick={handleTracking}>
            TRACK
          </button>
        </div>
        <div className={classes.links}>
          <Link to="/">MULTIPLE TRACKING NUMBERS</Link>
          <h2>|</h2>
          <Link to="/">NEED HELP?</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
