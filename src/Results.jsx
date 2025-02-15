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
    if (filter === 'yes') {
      return result.correct
    }
    if (filter === 'no') {
      return !result.correct
    }
  })

  const rows = filtered.map((example, index) => {
    return (
      <tr key={index}>
        <td>{example.answer}</td>
        <td>{example.correct ? 'Yes' : 'No'}</td>
      </tr>
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
        <option value='yes'>Correct</option>
        <option value='no'>Incorrect</option>
      </select>
      <table>
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