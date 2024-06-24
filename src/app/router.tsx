import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ForgotPassword from 'src/app/auth/forgot-password/form';
import LoginPage from 'src/app/auth/login/form';
import Billing from 'src/app/billing';
import Caps from 'src/app/caps';
import Data from 'src/app/data';
import Home from 'src/app/home';
import Reports from 'src/app/reports';
import AppRoot from 'src/app/root';



const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="request-password-reset" element={<ForgotPassword />} />
      <Route path="reports" element={<Reports />} />
      <Route path="caps" element={<Caps />} />
      <Route path="data" element={<Data />} />
      <Route path="billing" element={<Billing />} />
    </Route>
  )
);

export default appRouter;