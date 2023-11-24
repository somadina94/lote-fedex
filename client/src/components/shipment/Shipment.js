import { CgTrack } from 'react-icons/cg';
import { useLoaderData } from 'react-router-dom';

import classes from './Shipment.module.css';
import Tracking from './Tracking';
import { trackShipment } from '../../api/api';

const Shipment = () => {
  const res = useLoaderData();
  const shipment = res.data.shipment;
  const createdAt = new Date(shipment.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const deliveryDate = new Date(shipment.deliveryDate).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );
  return (
    <div className={classes.shipment}>
      <div className={classes.main}>
        <p>SHIPMENT CREATED</p>
        <p>Id: {shipment._id}</p>
        <h3>Name: {shipment.name}</h3>
        <p>Receipient: Williams Somadina</p>
        <p>Destination: {shipment.destination}</p>
        <p>Date created: {createdAt}</p>
        <p>Estimated delivery date: {deliveryDate}</p>
        <h3>Tracking Id: {shipment.trackingId}</h3>
      </div>
      <div className={classes.progress}>
        <p></p>
        <CgTrack className={classes.icon} />
      </div>
      <div className={classes.tracking}>
        {shipment.locations.map((el) => (
          <Tracking
            title={el.title}
            address={el.address}
            date={el.date}
            quote={el.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default Shipment;

export const loader = ({ params }) => {
  return trackShipment(params.id);
};
