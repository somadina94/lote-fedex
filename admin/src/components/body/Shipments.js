import { useLoaderData } from 'react-router-dom';

import classes from './Shipments.module.css';
import { getShipments } from '../../api/api';
import ShipmentItem from './ShipmentItem';

const Shipments = () => {
  const res = useLoaderData();
  const shipments = res.data.shipments;
  return (
    <section className={classes.shipments}>
      {shipments.map((el) => (
        <ShipmentItem
          id={el._id}
          facility={el.facility}
          sender={el.sender}
          receipient={el.receipient}
          destination={el.destination}
          createdAt={el.createdAt}
          deliveryDate={el.deliveryDate}
          name={el.name}
          trackingId={el.trackingId}
        />
      ))}
    </section>
  );
};

export default Shipments;

export const loader = () => {
  return getShipments();
};
