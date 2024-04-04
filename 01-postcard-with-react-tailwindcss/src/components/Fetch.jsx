import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const [post, setPost] = useState("")
  const [number, setNumber] = useState(1)

  // fetch data from jsonplaceholder/post api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
        const data = await res.json()
        setPost(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [post])

  console.log(post);

  // previous post button
  const prevPostButton = () => {
    setNumber((number) => number - 1)
  }

  // next post button
  const nextPostButton = () => {
      setNumber((number) => number + 1)
    }


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-rose-400 to-purple-700">
      <div className="container bg-gray-300/65 p-5 flex flex-col items-center justify-center rounded-lg shadow-md shadow-black/50 backdrop-blur-xl">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="indent-5 text-sm my-4 font-light">{post.body}</p>
        <div>
          <button className="bg-gray-900 text-white font-semibold w-[80px] h-[40px] rounded-md shadow-md shadow-purple-600 mx-2 hover:scale-95 duration-300 active:scale-110" onClick={prevPostButton}>Prev</button>
          <button className="bg-gray-900 text-white font-semibold w-[80px] h-[40px] rounded-md shadow-md shadow-purple-600 mx-2 hover:scale-95 duration-300 active:scale-110" onClick={nextPostButton}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Fetch