import { useState } from 'react'

export default function Terminal() {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState([])

  const handleRun = () => {
    setOutput(prev => [...prev, `> ${command}`])
    setCommand('')
  }

  return (
    <div className="min-h-screen bg-black text-neon font-mono p-4">
      <div className="mb-2">Vaultrix Terminal Mode — type your command</div>
      <div className="bg-gray-900 p-4 rounded h-64 overflow-auto">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <input
        className="w-full bg-black border border-neon mt-4 p-2 rounded outline-none"
        placeholder="upload myfile.zip --hidden"
        value={command}
        onChange={e => setCommand(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleRun()}
        autoFocus
      />
    </div>
  )
}