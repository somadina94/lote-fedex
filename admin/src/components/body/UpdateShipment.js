import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import classes from './Create.module.css';
import { updateOneShipment } from '../../api/api';
import { getOneShipment } from '../../api/api';
import AuthAlert from '../UI/AuthAlert';
import Spinner from '../UI/Spinner';

const UpdateShipment = () => {
  const nameRef = useRef(null);
  const senderRef = useRef(null);
  const facilityRef = useRef(null);
  const receipientRef = useRef(null);
  const trackingIdRef = useRef(null);
  const deliveryAddressRef = useRef(null);
  const createdAtRef = useRef(null);
  const deliveryDateRef = useRef(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertStatus, setAlertStatus] = useState(false);
  const navigate = useNavigate();
  const res = useLoaderData();
  const shipment = res.data.shipment;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    const data = {
      name: nameRef.current.value,
      receipient: receipientRef.current.value,
      trackingId: trackingIdRef.current.value,
      destination: deliveryAddressRef.current.value,
      createdAt: createdAtRef.current.value,
      deliveryDate: deliveryDateRef.current.value,
      sender: senderRef.current.value,
      facility: facilityRef.current.value,
    };

    const res = await updateOneShipment(shipment.trackingId, data);

    if (res.status === 'success') {
      setAlertMsg(res.message);
      setAlertStatus(true);
      setShowAlert(true);
      navigate('/shipments');
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
      <h2>Update Shipment</h2>
      <div className={classes.group}>
        <label>Shipment name</label>
        <input type="text" ref={nameRef} defaultValue={shipment.name} />
      </div>
      <div className={classes.group}>
        <label>FedEx facility</label>
        <input type="text" ref={facilityRef} defaultValue={shipment.facility} />
      </div>
      <div className={classes.group}>
        <label>Sender name</label>
        <input type="text" ref={senderRef} defaultValue={shipment.sender} />
      </div>
      <div className={classes.group}>
        <label>Receipient</label>
        <input
          type="text"
          ref={receipientRef}
          defaultValue={shipment.receipient}
        />
      </div>
      <div className={classes.group}>
        <label>Tracking Id</label>
        <input
          type="text"
          ref={trackingIdRef}
          placeholder="12 digit numbers"
          defaultValue={shipment.trackingId}
        />
      </div>
      <div className={classes.group}>
        <label>Delivery address</label>
        <input
          type="text"
          ref={deliveryAddressRef}
          defaultValue={shipment.destination}
        />
      </div>
      <div className={classes.group}>
        <label>Creation date</label>
        <input
          type="date"
          ref={createdAtRef}
          defaultValue={
            new Date(shipment.createdAt).toISOString().split('T')[0]
          }
        />
      </div>
      <div className={classes.group}>
        <label>Delivery date</label>
        <input
          type="date"
          ref={deliveryDateRef}
          defaultValue={
            new Date(shipment.deliveryDate).toISOString().split('T')[0]
          }
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Update shipment</button>
      </div>
    </form>
  );
};

export default UpdateShipment;

export const loader = ({ params }) => {
  return getOneShipment(params.id);
};
