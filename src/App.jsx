import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import WeatherApp from './WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SearchBox/>
      <InfoBox/> */}
      <WeatherApp/>
    </>
  )
}

export default App
