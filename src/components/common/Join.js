import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import * as firebase from 'firebase'
import { AuthContext } from '../../App'

function Join({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErrors] = useState('')

  const Auth = useContext(AuthContext)

  const handleForm = (e) => {
    e.preventDefault()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            history.push('/edit') // adding a route to history and navigating to it
            Auth.setLoggedIn(true)
            if (res.user.displayName) {
              Auth.setUserName(res.user.displayName)
            }
          })
          .catch(e => {
            setErrors(e.message)
          })
      })
  }

  const handleGoogleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth()
          .signInWithPopup(provider)
          .then(res => {
            history.push('/edit')
            Auth.setLoggedIn(true)
            if (res.user.displayName) {
              Auth.setUserName(res.user.displayName)
            }
          })
          .catch(e => {
            setErrors(e.message)
          })
      })
  }
  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
        />
        <br />
        <button onClick={() => handleGoogleLogin()}
          className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join With Google
        </button>
        <button type="submit">Sign Up</button>
        {error &&
          <h2>{error}</h2>
        }
      </form>
    </div>
  )
}

export default withRouter(Join)