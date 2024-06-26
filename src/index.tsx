import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './screens/HomePage';

import Signup from './screens/Register';
import Login from './screens/Login';
import SearchBookPage from './screens/SearchBookPage';
import Register from './screens/Register';

import BookCheckoutPage from './screens/BookCheckoutPage';
import { BookCategoryPage } from './screens/BookCategoryPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchBookPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/checkout/:category/:id' element={<BookCheckoutPage />} />
      <Route path='/bookcategorypage' element={<BookCategoryPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!)
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,

  );

