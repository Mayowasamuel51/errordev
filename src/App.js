import DashboardAuth from './components/DashboardAuth';
import LoginUser from './components/LoginUser';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
// import Home, { loadportfollio } from './pages/Home';

import StoreUrl, { formurl, getloaderurlwebiste, loaduriwebsite } from './ComponentsDashboard/StoreUrl';
import Question from './ComponentsDashboard/Question';
import MainError from './components/MainError';
import Portfoilo from './ComponentsDashboard/Portfoilo';
import PersonalSetting, { addSetting } from './ComponentsDashboard/PersonalSetting';
import StoreErrorFix, { loadererrorfix } from './ComponentsDashboard/StoreErrorFix';
import AppF from './Firbase';
import Table from './components/Table';
import ViewSoluition, { loadererrorfixid } from './ComponentsDashboard/ViewSoluition';
import Root from './pages/Root';
const Home = lazy(() => import('./pages/Home'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div className='fw-bold h2'>Loading</div>}>
      <Root />
    </Suspense>,
    loader: ({ params }) =>
      import('./pages/Home')
        .then((mod) => mod.portfolioloader({ params }))
        .catch((err) => console.log(err)),
    errorElement: <MainError />
  },
  {
    path: '/login',
    element: <LoginUser />
  },
  {
    path: '/dashboard',
    element: <DashboardAuth />,
    // errorElement: <MainError />,
    children: [
      {
        index: true,
        path: '/dashboard/websiteurl',
        errorElement: <MainError />,
        element: <StoreUrl />,
        loader: loaduriwebsite,

        action: formurl
      },
      {
        path: '/dashboard/questions',
        element: <Question />
      },
      {
        path: '/dashboard/portfolio',
        element: <Portfoilo />
      },
      {
        path: ':id',
        element: <ViewSoluition />,
        loader: loadererrorfixid,
        errorElement: <MainError />
      },
      {
        path: '/dashboard/errorfix',
        loader: loadererrorfix,
        element: <StoreErrorFix />,
        errorElement: <MainError />,
        children: [
          {
            index: true,
            path: ':_id',
            element: <h1>HELLO ID</h1>
          },
        ]
      },
      {
        path: '/dashboard/settings',
        action: addSetting,
        errorElement: <MainError />,
        element: <PersonalSetting />
      }
    ]
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
