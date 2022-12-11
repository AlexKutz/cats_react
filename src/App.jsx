import './App.css'
import Carousel from './components/CatCard/Carousel'
import GetCatForm from './components/GetCatForm/GetCatForm'
import { useState } from 'react'
import { getCats } from './api'

function App () {
  const [catData, setCatData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const getCatFetch = (tags = []) => {
    setIsFetching(true)
    tags = tags.join(',')
    getCats(tags)
      .finally(() => {
        setIsFetching(false)
      })
      .then(response => {
        setCatData(response)
      })
  }

  return (
    <div className="container">
      <h2>Find cats pictures</h2>
      <GetCatForm handleSubmit={getCatFetch} blocked={isFetching}/>
      <Carousel items={catData}/>
    </div>
  )
}

export default App
