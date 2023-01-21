import React from 'react'
import { useState, useEffect } from 'react'
import './Weather.css'

const Weather = () => {
  const [search, setSearch] = useState('Pune')
  const [city, setcity] = useState(null)

  // let mapikey = '84f38842a67d6ca926df03537e98ec6a';

  useEffect(() => {
    const getapi = async () => {
      const apidata = `https://api.openweathermap.org/data/2.5/weather?q=${search}&&units=metric&appid=84f38842a67d6ca926df03537e98ec6a`;
      const response = await fetch(apidata)
      const result = await response.json();
      console.log(result)
      setcity(result.main);
    }
    getapi();
  }, [search])
 
  return (
    <>
      <div className='mainbody'>
        <div className='box'>
          <div className='inputData'>
          <span className='sun'>⛅</span>
            <input type='search' value={search} className='inputField' onChange={(e) => setSearch(e.target.value)} />
            <span className='sun'>⛅</span>
          </div>
        
        {!city ? (<p className='notfound'> Oops ! Data Not Found 😪 </p>) :
          (<div>
            <div className='info'> 
              <h2 className='location'>
                <i className="fa sharp fa-solid fa-street-view"></i> {search} 
                {/* <span className='country'>{city.sys.country}</span> */}
              </h2> 
              <h1 className='temp'>Temp : {city.temp} °Cel</h1>
              <h3 className='tempmin_max'>Max-Temp : {city.temp_max} °Cel | Min-Temp : {city.temp_min} °Cel </h3>
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
          </div>
          )
        } 
        </div>
      </div>
    </>
  )
}

export default Weather