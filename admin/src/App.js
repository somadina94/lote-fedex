import { Fragment } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/layout/Layout';
import Create from './components/body/Create';
import ErrorModal from './components/UI/ErrorModal';
import Shipments from './components/body/Shipments';
import UpdateShipment from './components/body/UpdateShipment';
import AddLocation from './components/body/AddLocation';
import Locations from './components/locations/Locations';

import { loader as shipmentsLoader } from './components/body/Shipments';
import { loader as updateShipmentLoader } from './components/body/UpdateShipment';
import { loader as locationsLoader } from './components/locations/Locations';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorModal />}>
      <Route path="create-shipment" element={<Create />} />
      <Route
        path="shipments"
        element={<Shipments />}
        loader={shipmentsLoader}
      />
      <Route
        path="shipments/:id"
        element={<UpdateShipment />}
        loader={updateShipmentLoader}
      />
      <Route path="location/:id" element={<AddLocation />} />
      <Route
        path="shipment-location/:id"
        element={<Locations />}
        loader={locationsLoader}
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
