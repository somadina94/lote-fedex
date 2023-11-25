import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import classes from './ShipmentItem.module.css';
import { deleteShipment } from '../../api/api';
import Spinner from '../UI/Spinner';
import AuthAlert from '../UI/AuthAlert';

const ShipmentItem = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertStatus, setAlertStatus] = useState(false);
  const navigate = useNavigate();
  const createdAt = new Date(props.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const deliveryDate = new Date(props.deliveryDate).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );

  const handleDeleteShipment = async () => {
    setShowSpinner(true);

    const res = await deleteShipment(props.id);

    if (!res.status) {
      setAlertMsg('Shipment deleted successfully');
      setAlertStatus(true);
      setShowAlert(true);
      navigate('/shipments');
    } else if (res.status === 'fail') {
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
    <div className={classes.shipment}>
      {showSpinner && <Spinner />}
      {showAlert && <AuthAlert message={alertMsg} status={alertStatus} />}
      <div className={classes.info}>
        <span>Id</span>
        <span>{props.id}</span>
      </div>
      <div className={classes.info}>
        <span>Facility</span>
        <span>{props.facility}</span>
      </div>
      <div className={classes.info}>
        <span>Tracking Id</span>
        <span>{props.trackingId}</span>
      </div>
      <div className={classes.info}>
        <span>Sender</span>
        <span>{props.sender}</span>
      </div>
      <div className={classes.info}>
        <span>Shipment name</span>
        <span>{props.name}</span>
      </div>
      <div className={classes.info}>
        <span>Receipient</span>
        <span>{props.receipient}</span>
      </div>
      <div className={classes.info}>
        <span>Destination</span>
        <span>{props.destination}</span>
      </div>
      <div className={classes.info}>
        <span>Date created</span>
        <span>{createdAt}</span>
      </div>
      <div className={classes.info}>
        <span>Delivery date</span>
        <span>{deliveryDate}</span>
      </div>
      <div className={classes.action}>
        <button
          type="button"
          className={classes.update}
          onClick={() => navigate(`/shipments/${props.trackingId}`)}
        >
          Update
        </button>
        <button
          type="button"
          className={classes.delete}
          onClick={handleDeleteShipment}
        >
          Delete
        </button>
        <button
          type="button"
          className={classes.tracking}
          onClick={() => navigate(`/location/${props.trackingId}`)}
        >
          +loc
        </button>
        <button
          type="button"
          className={classes.add}
          onClick={() => navigate(`/shipment-location/${props.trackingId}`)}
        >
          locations
        </button>
      </div>
    </div>
  );
};

export default ShipmentItem;
