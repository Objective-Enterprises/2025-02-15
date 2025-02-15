import { useState } from "react"

export default function Login () {
  const [user, setUser] = useState({})
  function handleUsernameChange (event) {
    const newUser = { ...user, username: event.target.value }
    setUser(newUser)
  }
  function handlePasswordChange (event) {
    const newUser = { ...user, password: event.target.value }
    setUser(newUser)
  }
  return (
    <form>
      <input
        placeholder='username'
        value={user.username}
        onChange={handleUsernameChange}
      />
      <input
        placeholder='password'
        value={user.password}
        
      />
    </form>
  )
}