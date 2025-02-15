import { useState } from "react"

export default function Results (props) {
  const [filter, setFilter] = useState('')
  function handleChange (event) {
    setFilter(event.target.value)
  }
  console.log('filter', filter)

  const filtered = props.resultList.filter(result => {
    if (filter === '') {
      return true
    }
    return result.answer === filter
  })

  const rows = filtered.map((example, index) => {
    return (
      <tr key={index}>
        <td>{example.answer}</td>
        <td>{example.correct ? 'Yes' : 'No'}</td>
      </tr>
    )
  })

  const answers = props.resultList.map(result => {
    return result.answer
  })
  // [1, 2, 5, 1]
  const answerSet = new Set(answers)
  // Set { 1, 2, 5 }
  const uniqueAnswers = [...answerSet]
  // [1, 2, 5]
  const options = uniqueAnswers.map((answer, index) => {
    return (
      <option value={answer} key={index}>{answer}</option>
    )
  })

  return (
    <>
      Filter: 
      <select
        value={filter}
        onChange={handleChange}
      >
        <option value=''>All</option>
        {options}
      </select>
      <table style={{ color: 'blue', marginTop: '50px' }}>
        <thead>
          <tr>
            <th>Answer</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  )
}