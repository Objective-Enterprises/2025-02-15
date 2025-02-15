import { useState } from 'react'
// let count = 5

export default function Counter () {
  // Put all hooks together at the beginning of each component
  const [count, setCount] = useState(10)
  // End of hooks here

  console.log('render')
  function handleClick () {
    console.log('test')
    // count += 1
    const newCount = count + 1
    setCount(newCount)
    console.log('newCount', newCount)
  }
  return (
    <button onClick={handleClick}>
      {count}
    </button>
  )
}