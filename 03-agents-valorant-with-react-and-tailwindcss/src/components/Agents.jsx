import { useState, useEffect } from "react"
import axios from 'axios'
import valoBanner from '../assets/white-valo.png'


const Agents = () => {

  // constance 
  const [agents, setAgents] = useState([])
  const [agentsRole, setAgentsRole] = useState("Duelist")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // fetch valorant api with axios
  useEffect(() => {
    let abortController = new AbortController()

    const loadAgent = async () => {
      try {
        setLoading(true)
        let res = await axios.get(`https://valorant-api.com/v1/agents`, { signal: abortController.signal })
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

  // fix duplicated sova
  const playabledAgents = agents?.data?.filter((agent) => {
    return agent?.isPlayableCharacter === true && agent?.role?.displayName === agentsRole
  })

  // handle event after select role 
  function handleSelect(event) {
    setAgentsRole(event.target.value)
  }


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-5">
        <div className="grid md:col-span-2 row-span-2">
          <p className="capitalize">select role:</p>
          <select
            onChange={handleSelect}
            name="agentsSelect" id="agentsSelect"
            className="text-white w-40 text-center rounded-md p-2 bg-gray-900 dark:text-black dark:bg-white">
            <option className="text-white dark:text-black" value="Duelist" selected>
              Duelist
            </option>
            <option className="text-white dark:text-black" value="Initiator">
              Initiator
            </option>
            <option className="text-white dark:text-black" value="Controller">
              Controller
            </option>
            <option className="text-white dark:text-black" value="Sentinel">
              Sentinel
            </option>
          </select>
        </div>
        {playabledAgents?.map((agent, idx) => (
          <div
            className="flex items-left justify-around bg-gradient-to-tr from-orange-400 to-rose-500 rounded-lg p-2 gap-5"
            key={idx}
          >
            <div className="flex-shrink-0">
              <img
                className="w-24 md:w-full h-48 object-cover object-right translatex-5 md:object-cover rounded-md bg-gradient-to-br from-orange-500 to-rose-300"
                src={agent?.displayIcon}
                alt="agentIcons"
              />
            </div>
            <div>
              <div>
                {/* AGENT INFO SECTION */}
                <div className="flex items-center gap-2">
                  <h2 className="text-md md:text-lg font-bold">{agent?.displayName}</h2>
                  <p className="text-sm">{agent?.role?.displayName}</p>
                  <img className="w-5" src={agent?.role?.displayIcon} alt="roleIcons" />
                </div>
                <p className="text-[14px] md:text-[16px] line-clamp-3">{agent?.description}</p>
              </div>
              <h2 className="text-md md:text-lg font-bold my-1">Abilitys</h2>
              <div className="flex gap-4">
                {/* AGENT ABILITYS SECTION */}
                {agent?.abilities.map((abil, idx) => (
                  <div className="flex flex-col gap-2 justify-center items-center" key={idx}>
                    <img className="w-9 hover:scale-125 duration-200 cursor-pointer" src={abil?.displayIcon !== null ? abil?.displayIcon : valoBanner} alt="abilityIcons" />
                    <p className="text-xs">{abil?.slot}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Agents