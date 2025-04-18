export default function Explorer() {
  return (
    <div className="min-h-screen bg-vault text-white p-6">
      <h2 className="text-xl font-bold mb-4">Vault Explorer</h2>
      <div className="flex items-center justify-between mb-4">
        <input
          className="bg-black p-2 rounded w-full max-w-sm"
          placeholder="Search Hidden Vault..."
        />
        <button className="ml-4 text-neon">Grid / List</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 p-4 rounded shadow-lg relative">
          <p className="text-sm">file_xyz.zip</p>
          <div className="absolute top-2 right-2 space-x-1 text-sm">
            <button title="Copy Link">🔗</button>
            <button title="Download">⬇️</button>
            <button title="Rename">✏️</button>
            <button title="Delete">❌</button>
          </div>
        </div>
        {/* Repeat for more files */}
      </div>
    </div>
  )
}