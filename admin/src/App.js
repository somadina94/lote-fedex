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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorModal />}>
      <Route path="create-shipment" element={<Create />} />
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
