export default function Upload() {
  return (
    <div className="min-h-screen bg-vault text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Secure Upload</h2>
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl shadow-lg space-y-4">
        <input className="w-full p-2 bg-black rounded" placeholder="File Alias" />
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Set to Hidden</span>
        </label>
        <input className="w-full p-2 bg-black rounded" placeholder="Metadata Tags" />
        <div className="flex space-x-2 mt-4">
          <button className="bg-neon text-black py-2 px-4 rounded">Upload & Encrypt</button>
          <button className="border border-white py-2 px-4 rounded">Cancel</button>
        </div>
      </div>
    </div>
  )
}