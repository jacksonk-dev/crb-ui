import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import LoginPage from 'src/app/auth/login';
import Caps from 'src/app/caps';
import Data from 'src/app/data';
import Home from 'src/app/home';
import Reports from 'src/app/reports';
import AppRoot from 'src/app/root';

import Billing from './billing';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="reports" element={<Reports />} />
      <Route path="caps" element={<Caps />} />
      <Route path="data" element={<Data />} />
      <Route path="billing" element={<Billing />} />
    </Route>
  )
);

export default appRouter;