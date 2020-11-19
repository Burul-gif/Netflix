import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ userName, repositoryName, user }) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-red-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight uppercase">{userName}</span>
          <span className="font-semibold mx-4 text-xl tracking-tight">
            <img className="w-12 h-12 rounded-full" src={user.avatar_url} alt="" />
          </span>
          <span className="font-semibold text-xl tracking-tight mr-4"> users id: {user.id}</span>
          <span className="font-semibold text-xl tracking-tight mr-4">Location: {user.location}</span>
          <span className="font-semibold text-xl tracking-tight mr-4">Type: {user.type}</span>
          <span className="font-semibold text-xl tracking-tight">Url: {user.url}</span>
        </div>
        <div className="w-full block justify-end flex-grow lg:flex lg:items-center lg:w-auto">
          <div>
            <Link
              to="/"
              className="inline-block text-sm justify px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white m-4 lg:mt-0"
            >
              Back to main
            </Link>
            {repositoryName && (
              <Link
                to={`/${userName}`}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Back to repo
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
