import { useState } from "react"
import Question from "./Question"

export default function Quiz () {
  const [ready, setReady] = useState(false)

  if (ready) {
    return <Question />
  }

  function handleClick () {
    setReady(true)
  }
  return (
    <div>
      <p>Ready to start the quiz?</p>
      <button onClick={handleClick}>Ready</button>
      <hr />
    </div>
  )
}