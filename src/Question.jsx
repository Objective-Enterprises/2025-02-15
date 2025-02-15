import { useState } from "react"

export default function Question () {
  const [answer, setAnswer] = useState('')
  function handleChange (event) {
    setAnswer(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    console.log('answer', answer)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>1 + 1 = ???</p>
      <input
        value={answer}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
      <hr />
    </form>
  )
}