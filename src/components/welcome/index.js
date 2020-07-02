import React, { useState } from 'react'

function Welcome() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Welcome to Lucky Chinese</h1>
      <p>You clicked Lucky Button {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Lucky Button
      </button>
    </div>
  )
}

export default Welcome