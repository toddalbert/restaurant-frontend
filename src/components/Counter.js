import React, { useState, useEffect } from 'react'
// Add a counter and a button

function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You Lucky ${count} Times`
  })
  return (
    <div style={{ width: '600px', margin: '8px auto' }}>
      <h2>You clicked the Lucky Button {count} Times</h2>
      <button onClick={() => setCount(count + 1)}>Lucky Button</button>
    </div>
  )
}

export default Counter