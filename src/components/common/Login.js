import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import * as firebase from 'firebase'
import { AuthContext } from '../../App'

function Login({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErrors] = useState('')

  const Auth = useContext(AuthContext)

  const handleForm = (e) => {
    e.preventDefault()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            if (res.user) { // did it succeed
              Auth.setLoggedIn(true)
              history.push('/edit')
              console.log(res.user.photoURL)
            }
          })
          .catch(e => {
            setErrors(e.message)
          })
      })
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth()
          .signInWithPopup(provider)
          .then(result => {
            Auth.setLoggedIn(true)
            history.push('/edit')
            console.log(result.user.photoURL)
          })
          .catch(e => setErrors(e.message))
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button onClick={() => signInWithGoogle()}
          className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
        <button type="submit">Login</button>
        {error &&
          <span>{error}</span>
        }
      </form>
    </div>
  )
}

export default withRouter(Login)