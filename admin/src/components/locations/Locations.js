import { useLoaderData } from 'react-router-dom';

import classes from './Locations.module.css';
import { getOneShipment } from '../../api/api';
import LocationItem from './LocationItem';

const Locations = () => {
  const res = useLoaderData();

  const locations = res.data.shipment.locations;

  const mappedDates = locations.map((el) => ({
    ...el,
    date: new Date(el.date),
  }));

  const sorted = mappedDates.sort((a, b) => b.date - a.date);

  return (
    <div className={classes.locations}>
      <h2>This list is sorted from top oldest to bottom newest</h2>
      {sorted.map((el) => (
        <LocationItem
          id={el._id}
          key={el.id}
          title={el.title}
          address={el.address}
          date={el.date}
          quote={el.quote}
          trackingId={res.data.shipment.trackingId}
        />
      ))}
    </div>
  );
};

export default Locations;

export const loader = ({ params }) => {
  return getOneShipment(params.id);
};
