import { useState, useEffect } from "react"
import axios from 'axios'

function App() {

  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  useEffect(() => {
    let abortController = new AbortController()

    const loadAgent = async () => {
      try {
        setLoading(true)
        let res = await axios.get("https://valorant-api.com/v1/agents", { signal: abortController.signal })
        setAgents(res.data)
        setError("")
      } catch (error) {
        setError("Something went wrong!", error)
      } finally {
        setLoading(false)
      }
    }

    loadAgent()

  }, [])

  console.log(agents);

  const playabledAgents = agents?.data?.filter((agent) => {
    return agent?.isPlayableCharacter === true
  })

  console.log(playabledAgents);

  // fetch data from jsonplaceholder/post api
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`https://valorant-api.com/v1/agents`)
  //       const data = await res.json()
  //       setAgents(data)
  //     } catch (error) {
  //       console.error(error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchData()
  // },)


  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1>Valorant Agents</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {playabledAgents?.map((agent, index) => (
            <div
            className="bg-gradient-to-tr from-rose-500 to-rose-200 flex flex-col items-center p-5 rounded-lg" 
            key={index}>
              <img className="w-1/3" src={agent?.displayIcon} alt="" />
              <h2>{agent?.displayName}</h2>
              <p>{agent?.description}</p>
              <div className="flex items-center gap-4">
                <img
                  className="w-1/6 bg-gray-500 rounded-lg"
                  src={agent?.role?.displayIcon} alt="" />
                <p>{agent?.role?.displayName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
