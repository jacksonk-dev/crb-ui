import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import AppRoot from './root';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppRoot />}>
      {/* <Route path="contact" element={<Contact />} />
          <Route
            path="dashboard"
            element={<Dashboard />}
            loader={({ request }) =>
              fetch("/api/dashboard.json", {
                signal: request.signal,
              })
            }
          />
          <Route element={<AuthLayout />}>
            <Route
              path="login"
              element={<Login />}
              loader={redirectIfUser}
            />
            <Route path="logout" action={logoutUser} />
          </Route> */}
    </Route>
  )
);

export default appRouter;