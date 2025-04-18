import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function Login() {
  const [key, setKey] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, key + '@vaultrix.io', token || 'defaultpass')
    } catch (err) {
      setError('Access Denied.')
    }
  }

  return (
    <div className="min-h-screen bg-vault text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-mono mb-4">Enter Vaultrix</h1>
      <input
        className="bg-gray-800 p-2 rounded w-full max-w-sm mb-2 outline-none"
        placeholder="Vault Key"
        value={key}
        onChange={e => setKey(e.target.value)}
      />
      <input
        className="bg-gray-800 p-2 rounded w-full max-w-sm mb-4 outline-none"
        placeholder="Optional Access Token"
        value={token}
        onChange={e => setToken(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-neon text-black font-bold py-2 px-6 rounded hover:opacity-90 transition"
      >
        Access Vault
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  )
}