import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [account, setAccount] = useState(null)

  return (
    <div className="w-full min-h-screen bg-blue-900 flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-white text-center text-shadow">
        Hello Web3!
      </h1>

      <h2 className="text-6xl text-center my-24 font-bold text-yellow-300">
        👋 {count}
      </h2>

      {!account ? (
        <button className="rounded-full py-6 px-12 text-3xl mt-24 text-white bg-purple-700 hover:scale-105 hover:bg-purple-600 transition-all">
          Connect Wallet
        </button>
      ) : (
        <button
          className="rounded-full py-6 px-12 text-3xl mt-16 text-white bg-purple-700 hover:scale-105 hover:bg-purple-600 transition-all"
          onClick={() => setCount((s) => ++s)}
        >
          Say Hi
        </button>
      )}
    </div>
  )
}

export default App
