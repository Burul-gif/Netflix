import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RepoList = ({ repoList, userName }) => {
  const [search, setSearch] = useState('')
  const searchRepo = repoList.filter((repo) => repo.name.includes(search))
  return (
    <div className="bg-green-900">
      <input
        placeholder="Search"
        value={search}
        type="text"
        className="m-4  border-solid  bg-green-900 border-b-4  outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex justify-between bg-green-900 flex-wrap">
        {searchRepo.map((repo) => {
          return (
            <div
              className="m-6 border-solid rounded-full py-3 px-6 bg-red-700 border-4 border-grey-688 p-6"
              key={repo.id}
            >
              <Link to={`/${userName}/${repo.name}`}>{repo.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RepoList
