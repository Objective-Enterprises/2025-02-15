export default function Results () {
  const examples = [
    {
      answer: 1,
      correct: true
    },
    {
      answer: 5,
      correct: false
    }
  ]
  const rows = examples.map((example, index) => {
    return (
      <tr key={index}>
        <td>{example.answer}</td>
        <td>{example.correct ? 'Yes' : 'No'}</td>
      </tr>
    )
  })

  return (
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
  )
}