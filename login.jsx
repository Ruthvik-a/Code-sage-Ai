import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/dashboard')  // Redirect to dashboard after successful login/sign-up
    } catch (err) {
      setError('Authentication failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-vault text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-mono mb-4">{isSignUp ? 'Create Vaultrix Account' : 'Enter Vaultrix'}</h1>
      <input
        className="bg-gray-800 p-2 rounded w-full max-w-sm mb-2 outline-none"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="bg-gray-800 p-2 rounded w-full max-w-sm mb-4 outline-none"
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        onClick={handleAuth}
        className="bg-neon text-black font-bold py-2 px-6 rounded hover:opacity-90 transition"
      >
        {isSignUp ? 'Sign Up' : 'Access Vault'}
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
      <p
        onClick={() => setIsSignUp(!isSignUp)}
        className="mt-4 text-neon cursor-pointer"
      >
        {isSignUp ? 'Already have an account? Log in' : 'New to Vaultrix? Sign up'}
      </p>
    </div>
  )
}