import Hello from "./Hello"
import Goodbye from "./Goodbye"
import Counter from "./Counter"

export default function App () {
  return (
    <>
      <h1>Welcome</h1>
      <Counter />
      <Hello person='Zelda' />
      <Hello person='Dorothy' />
      <Hello person='Tallulah' />
      <Goodbye person='Dorothy' />
    </>
  )
}
