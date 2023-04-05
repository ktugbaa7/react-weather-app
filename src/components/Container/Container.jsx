import React from 'react'
import Search from '../Search/Search'
import WeatherForecast from '../WeatherForecast/WeatherForecast'
import Footer from '../Footer/Footer'

function Container() {
  return (
    <div className='conta w-full mx-auto h-full md:h-[100vh] pb-20 md:pb-2'>
        <Search />
        <WeatherForecast  />
        <Footer />
    </div>
  )
}

export default Container