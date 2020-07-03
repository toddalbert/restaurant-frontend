import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import * as firebase from 'firebase'
import Navbar from './components/common/Navbar'
import Menu from './components/menu'
import Counter from './components/Counter'
import Edit from './components/Edit'
import Join from './components/common/Join'
import Login from './components/common/Login'
import firebaseConfig from './config'
import './App.css'

firebase.initializeApp(firebaseConfig)

export const AuthContext = createContext(null)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState(null)
  // console.log(firebase)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, userName, setUserName }}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/counter" component={Counter} />
            <Route path="/edit">
              {isLoggedIn
                ? <Edit />
                : <Login />
              }
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Join} />
            <Route exact path="/">
              <h1>Welcome Lucky Chinese</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App