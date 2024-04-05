import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([])


  /*
    // get api with fetch
    const controller = new AbortController()
    const signal = controller.signal
  
    function beginFetching() {
      console.log('Now Fetching')
      let urlToFetch = "https://api.openbrewerydb.org/v1/breweries"
      fetch(urlToFetch, {
        method: 'get',
        signal: signal
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch(err => {
          console.error(err)
        })
    }
  
    function abortFetching() {
      console.log('Now Aboarting');
      controller.abort()
    }
  
    */

  //get api with axios
  const controller = new AbortController()
  const signal = controller.signal

  function axiosFetch() {
    console.log('DATA Fetching');
    axios.get('https://api.openbrewerydb.org/v1/breweries', { signal: signal })
      .then(res => setData(res.data))
  }

  function axiosAbort() {
    console.log('DATA Aborting');
    controller.abort()
  }

  console.log(data);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container">
          <div className="grid grid-cols-4 gap-5 mx-auto my-5">
            {data.map((rest, index) => (
              <div
                className="bg-gradient-to-br from-rose-400 to-rose-600 text-white font-semibold font-sans 
                rounded-md p-3"
                key={index}>
                <div className="flex flex-col gap-3">
                  <div className="bg-white text-black p-2 text-center font-bold">
                    <h1>{rest.name}</h1>
                  </div>

                  <p className="font-light text-sm">{rest.address_1}</p>
                  <p className="font-light text-sm">{rest.city}</p>
                  <p className="font-light text-sm">{rest.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App