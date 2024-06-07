import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import LoginPage from './auth/login';
import Caps from './caps';
import Data from './data';
import Reports from './reports';
import AppRoot from './root';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="reports" element={<Reports />} />
      <Route path="caps" element={<Caps />} />
      <Route path="data" element={<Data />} />
    </Route>
  )
);

export default appRouter;