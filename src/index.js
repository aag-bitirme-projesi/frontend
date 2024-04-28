import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {  LoginPage, ForgotPassword, SignUp, LandingPage} from './pages';
import {  Team, Invoices,Contacts } from './pages';
import { Dashboard, Bar,Form, Line,Pie,FAQ, Geography} from './pages';
const router = createBrowserRouter([
  {
    path :"/",
    element: <App/>,
  },
  {
    path :"login",
    element: <LoginPage/>,
  },
  {
    path :"signUp",
    element: <SignUp/>,
  },
  {
    path :"forgotPassword",
    element: <ForgotPassword/>,
  },
  {
    path :"landingPage",
    element: <LandingPage/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "team",
    element: <Team />,
  },
  {
    path: "invoices",
    element: <Invoices />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "bar",
    element: <Bar />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "line",
    element: <Line />,
  },
  {
    path: "pie",
    element: <Pie />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "geography",
    element: <Geography />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router = {router}/> 
)
//ReactDOM.render(<App />, document.getElementById('root'));
//reportWebVitals();