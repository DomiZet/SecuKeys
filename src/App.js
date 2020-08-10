import React from 'react'
import SignIn from './pages/SignIn/SignIn'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Welcome from './pages/Welcome/Welcome'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import './Styles.scss'

function App() {
  return (
      <Router>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/reset-password" exact>
          <ResetPassword />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
    </Router>
  );
}

export default App