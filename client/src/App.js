import { Fragment } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './components/body/content/Home';
import Shipment from './components/shipment/Shipment';
import { loader as shipmentLoader } from './components/shipment/Shipment';
import ErrorModal from './components/UI/ErrorModal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorModal />}>
      <Route index element={<Home />} />
      <Route
        path="tracking/:id"
        element={<Shipment />}
        loader={shipmentLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
