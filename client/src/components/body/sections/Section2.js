import classes from './Section2.module.css';
import savings from '../../../images/saving.png';

const Section2 = () => {
  return (
    <div className={classes.section}>
      <img src={savings} alt="savings" />
    </div>
  );
};

export default Section2;
