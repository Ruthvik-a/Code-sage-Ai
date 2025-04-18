import { useState } from 'react'
import { uploadFile } from '../firebase'

export default function Upload() {
  const [file, setFile] = useState(null)
  const [isHidden, setIsHidden] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return
    await uploadFile(file, isHidden)
  }

  return (
    <div className="min-h-screen bg-vault text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Secure Upload</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isHidden}
          onChange={(e) => setIsHidden(e.target.checked)}
        />
        <span>Set to Hidden</span>
      </label>
      <button
        onClick={handleUpload}
        className="bg-neon text-black py-2 px-4 rounded mt-4"
      >
        Upload & Encrypt
      </button>
    </div>
  )
}