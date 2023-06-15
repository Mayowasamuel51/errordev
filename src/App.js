import DashboardAuth from './components/DashboardAuth';
import LoginUser from './components/LoginUser';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import StoreUrl, { formurl } from './ComponentsDashboard/StoreUrl';
import Question from './ComponentsDashboard/Question';
import MainError from './components/MainError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <MainError />
  },
  {
    path: 'login',
    element: <LoginUser />
  },
  {
    path: 'dashboard',
    element: <DashboardAuth />,
    children: [
      {
        index: true,
        path: 'websiteurl',
        element: <StoreUrl />,
        action: formurl
      },
      {
        path: 'questions',
        element: <Question />
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
