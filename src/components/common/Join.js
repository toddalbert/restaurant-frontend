import React, { useState, useContext } from 'react'
import * as firebase from 'firebase'
import { AuthContext } from '../../App'

function Join() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErrors] = useState('')
  const Auth = useContext(AuthContext)
  function handleForm(e) {
    e.preventDefault()
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) {
          Auth.setLoggedIn(true)
        }
      })
      .catch(e => {
        setErrors(e.message)
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
        <button class="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join With Google
        </button>
        <button type="submit">Login</button>
        {error &&
          <span>{error}</span>
        }
      </form>
    </div>
  )
}

export default Join