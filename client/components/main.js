import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="flex items-center justify-center bg-green-700 h-screen font-size: 1rem">
      <input
        className="m-4 p-2 border-solid  bg-red-700 border-2  outline-none"
        type="text"
        placeholder="Enter user name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Link className="m-6 p-2 pr-8 pl-8 border-2 bg-red-700" to={`/${user}`}>
        Find
      </Link>
    </div>
  )
}

export default Main
