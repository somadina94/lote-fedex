import { useState, useRef } from 'react';

import classes from './Create.module.css';
import { createShipment } from '../../api/api';
import AuthAlert from '../UI/AuthAlert';
import Spinner from '../UI/Spinner';

const Create = () => {
  const nameRef = useRef(null);
  const receipientRef = useRef(null);
  const trackingIdRef = useRef(null);
  const deliveryAddressRef = useRef(null);
  const createdAtRef = useRef(null);
  const deliveryDateRef = useRef(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertStatus, setAlertStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    const data = {
      name: nameRef.current.value,
      receipient: receipientRef.current.value,
      trackingId: trackingIdRef.current.value,
      deliveryAddress: deliveryAddressRef.current.value,
      createdAt: createdAtRef.current.value,
      deliveryDate: deliveryDateRef.current.value,
    };

    const res = await createShipment(data);

    if (res.status === 'success') {
      setAlertMsg(res.message);
      setAlertStatus(true);
      setShowAlert(true);
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
    <form className={classes.form} onSubmit={handleSubmit}>
      {showSpinner && <Spinner />}
      {showAlert && <AuthAlert status={alertStatus} message={alertMsg} />}
      <h2>Create Shipment</h2>
      <div className={classes.group}>
        <label>Shipment name</label>
        <input type="text" ref={nameRef} />
      </div>
      <div className={classes.group}>
        <label>Receipient</label>
        <input type="text" ref={receipientRef} />
      </div>
      <div className={classes.group}>
        <label>Tracking Id</label>
        <input type="text" ref={trackingIdRef} />
      </div>
      <div className={classes.group}>
        <label>Delivery address</label>
        <input type="text" ref={deliveryAddressRef} />
      </div>
      <div className={classes.group}>
        <label>Creation date</label>
        <input type="date" ref={createdAtRef} />
      </div>
      <div className={classes.group}>
        <label>Delivery date</label>
        <input type="date" ref={deliveryDateRef} />
      </div>
      <div className={classes.action}>
        <button type="submit">Create shipment</button>
      </div>
    </form>
  );
};

export default Create;
