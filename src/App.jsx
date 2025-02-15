import Hello from "./Hello"
import Goodbye from "./Goodbye"
import Counter from "./Counter"
import Quiz from "./Quiz"
import Results from "./Results"
import { useState } from "react"

export default function App () {
  const [resultList, setResultList] = useState([])
  console.log('resultList', resultList)
  return (
    <>
      <h1>Quiz App</h1>
      <Quiz
        resultList={resultList}
        setResultList={setResultList}
      />
      <Results
        resultList={resultList}
      />
      <Counter />
      <Hello person='Zelda' />
      <Hello person='Dorothy' />
      <Hello person='Tallulah' />
      <Goodbye person='Dorothy' />
    </>
  )
}
