import { CgTrack } from 'react-icons/cg';

import classes from './Tracking.module.css';

const Tracking = (props) => {
  const { title, address, quote } = props;

  const date = new Date(props.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className={classes.list}>
      <div className={classes.progress}>
        <p></p>
      </div>
      <div className={classes.track}>
        <h2>{title}</h2>
        <p>{address}</p>
        <p>{date}</p>
        <p>{quote}</p>
      </div>
      <div className={classes.progress}>
        <p></p>
        <CgTrack className={classes.icon} />
      </div>
    </div>
  );
};

export default Tracking;
