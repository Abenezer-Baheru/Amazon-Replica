import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login'
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51LxpHnHpxZyuktrV0ghxln6Vf96ANRyZWjKC0LsJSvwk8lWdhnz5oM9tUd0k6qb9F9JA6CgLbbtAyDlWG8YmR0Xd00woFmIRxd'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" 
          element={
          <>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </>
        }
        />
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
          <Route path="/orders" element={<><Header/><Orders/></>}/>
          
      </Routes>
    </div>
    </Router>
  );
}
export default App;
