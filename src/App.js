import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Route, Routes, Link
} from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Mail from './Components/Mail/Mail';
import EmailList from './Components/EmailList/EmailList';
import EmailRow from './Components/EmailRow/EmailRow';
import SendMail from './Components/SendMail/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { useDispatch } from 'react-redux';
import { auth } from './firebase'
import { useEffect } from 'react'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      } else {

      }
    })
  }, [])
  return (
    <Router >

      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>

  );
}

export default App;
