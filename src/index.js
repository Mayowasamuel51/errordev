import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import analytics from './Firbase';
import '../node_modules/bulma/css/bulma.min.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Appf from './Firbase';
const root = ReactDOM.createRoot(document.getElementById('root'));


const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
  {/* <QueryClientProvider client={queryClient}> */}
    <App />
  {/* </QueryClientProvider>, */}

  </React.StrictMode>
);

