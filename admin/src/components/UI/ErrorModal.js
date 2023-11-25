import { Fragment } from 'react';

import Header from '../main/Header';
import classes from './ErrorModal.module.css';

const ErrorModal = () => {
  const message = 'Something went wrong!';

  return (
    <Fragment>
      <Header />
      <section className={classes.error}>
        <p>{message}</p>
      </section>
    </Fragment>
  );
};

export default ErrorModal;
