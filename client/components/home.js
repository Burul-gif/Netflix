import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Readme from './readme'
import RepoList from './repoList'
import Header from './header'

const Home = () => {
  const [repoList, setRepoList] = useState([])
  const [user, setUser] = useState([])
  const [readme, setReadme] = useState('')
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    if (repositoryName !== undefined) {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setReadme(data))
    }
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div>
      <Header userName={userName} repositoryName={repositoryName} user={user} />
      <Route
        exact
        path="/:userName"
        component={() => <RepoList repoList={repoList} userName={userName} />}
      />
      <Route exact path="/:userName/:repositoryName" component={() => <Readme readme={readme} />} />
    </div>
  )
}

export default Home
