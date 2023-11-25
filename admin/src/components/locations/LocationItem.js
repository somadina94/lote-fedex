import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './LocationItem.module.css';
import { deleteLocation } from '../../api/api';
import AuthAlert from '../UI/AuthAlert';
import Spinner from '../UI/Spinner';

const LocationItem = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertStatus, setAlertStatus] = useState(false);
  const navigate = useNavigate();
  const date = new Date(props.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleDeleteLoc = async () => {
    setShowSpinner(true);

    const data = {
      locId: props.id,
      trackingId: props.trackingId,
    };

    const res = await deleteLocation(data);

    if (res.status === 'success') {
      setAlertMsg(res.message);
      setAlertStatus(true);
      setShowAlert(true);
      navigate(`/shipment-location/${props.trackingId}`);
    } else {
      setAlertMsg(res.message);
      setAlertStatus(false);
      setShowAlert(true);
    }

    setShowSpinner(false);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };
  return (
    <div className={classes.location}>
      {showSpinner && <Spinner />}
      {showAlert && <AuthAlert message={alertMsg} status={alertStatus} />}
      <h2>{props.title}</h2>
      <p>{props.address}</p>
      <p>{date}</p>
      <p>{props.quote}</p>
      <div className={classes.action}>
        <button type="button" onClick={handleDeleteLoc}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default LocationItem;
