import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/common/Navbar'
import Menu from './components/menu'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/edit">
            <p>This is where we will edit our menu.</p>
          </Route>
          <Route exact path="/">
            <h1>Welcome to Lucky #1 Chinese</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
