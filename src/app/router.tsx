import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import AppRoot from 'src/app';
import ForgotPassword from 'src/app/core/auth/forgot-password/form';
import LoginPage from 'src/app/core/auth/login/form';
import ResetPassword from 'src/app/core/auth/reset-password/form';
import Home from 'src/app/home';
import Billing from 'src/app/modules/billing';
import Caps from 'src/app/modules/caps';
import Data from 'src/app/modules/data';
import Reports from 'src/app/modules/reports';
import ReportsDashboard from 'src/app/modules/reports/dashboard';
import NewReport from 'src/app/modules/reports/new';


const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="request-password-reset" element={<ForgotPassword />} />
      <Route path="reports" element={<Reports />}>
        <Route path="" element={<ReportsDashboard />} />
        <Route path="new" element={<NewReport />} />
      </Route>
      <Route path="caps" element={<Caps />} />
      <Route path="data" element={<Data />} />
      <Route path="billing" element={<Billing />} />
    </Route>
  )
);

export default appRouter;