import Hello from "./Hello"
import Goodbye from "./Goodbye"
import Counter from "./Counter"
import Quiz from "./Quiz"

export default function App () {
  return (
    <>
      <h1>Quiz App</h1>
      <Quiz />
      <Counter />
      <Hello person='Zelda' />
      <Hello person='Dorothy' />
      <Hello person='Tallulah' />
      <Goodbye person='Dorothy' />
    </>
  )
}
