import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 p-6 space-y-4">
      <h1 className="text-2xl font-mono text-white mb-8">Vaultrix</h1>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block text-neon hover:underline">Dashboard</Link>
        <Link to="/explorer" className="block text-neon hover:underline">Vault Explorer</Link>
        <Link to="/upload" className="block text-neon hover:underline">Upload</Link>
        <Link to="/settings" className="block text-neon hover:underline">Settings</Link>
        <Link to="/terminal" className="block text-neon hover:underline">Terminal Mode</Link>
      </nav>
    </div>
  )
}