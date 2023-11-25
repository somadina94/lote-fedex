import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import classes from './AddLocation.module.css';
import { addLocation } from '../../api/api';
import Spinner from '../UI/Spinner';
import AuthAlert from '../UI/AuthAlert';

const AddLocation = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertStatus, setAlertStatus] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const titleRef = useRef(null);
  const addressRef = useRef(null);
  const dateRef = useRef(null);
  const quoteRef = useRef(null);

  const addLocationHandler = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    const data = {
      title: titleRef.current.value,
      address: addressRef.current.value,
      date: dateRef.current.value,
      quote: quoteRef.current.value,
    };

    const res = await addLocation(params.id, data);

    if (res.status === 'success') {
      setAlertMsg(res.message);
      setAlertStatus(true);
      setShowAlert(true);
      navigate(`/shipment-location/${params.id}`);
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
    <form className={classes.form} onSubmit={addLocationHandler}>
      {showSpinner && <Spinner />}
      {showAlert && <AuthAlert message={alertMsg} status={alertStatus} />}
      <h2>Add a new location</h2>
      <div className={classes.group}>
        <label>Action</label>
        <input type="text" placeholder="Departed or Arrived" ref={titleRef} />
      </div>
      <div className={classes.group}>
        <label>Location</label>
        <input
          type="text"
          placeholder="FedEx facility address"
          ref={addressRef}
        />
      </div>
      <div className={classes.group}>
        <label>Date</label>
        <input type="date" ref={dateRef} />
      </div>
      <div className={classes.group}>
        <label>Remark</label>
        <input
          type="text"
          placeholder="Processing or your billing statement"
          ref={quoteRef}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Create location</button>
      </div>
    </form>
  );
};

export default AddLocation;
