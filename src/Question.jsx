import { useState } from "react"

export default function Question (props) {
  const [answer, setAnswer] = useState('')
  function handleChange (event) {
    setAnswer(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    console.log('answer', answer)
    const newResult = {
      answer,
      correct: Number(answer) === 2
    }
    const newResultList = [...props.resultList, newResult]
    props.setResultList(newResultList)
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