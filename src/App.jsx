import Hello from "./Hello"
import Goodbye from "./Goodbye"
import Counter from "./Counter"
import Quiz from "./Quiz"
import Results from "./Results"
import { useState } from "react"
import './style.css'
import Login from "./Login"

export default function App () {
  const [resultList, setResultList] = useState([])
  console.log('resultList', resultList)
  const headingClass = resultList.length > 0 ? '' : 'highlight'
  return (
    <>
      <h1 className={headingClass}>Quiz App</h1>
      <Login />
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
