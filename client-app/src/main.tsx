import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css'
import './app/layout/styles.css';
import 'react-calendar/dist/Calendar.css';
import { store, StoreContext } from './app/stores/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>,
)
