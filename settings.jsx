export default function Settings() {
  return (
    <div className="min-h-screen bg-vault text-white p-6">
      <h2 className="text-xl font-bold mb-4">Vault Settings</h2>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm">Dark Mode</label>
          <select className="w-full bg-gray-900 p-2 rounded">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">Default Storage Location</label>
          <input className="w-full bg-gray-900 p-2 rounded" placeholder="e.g. /vault/hidden" />
        </div>
        <div>
          <label className="block text-sm">Vault Branding</label>
          <input className="w-full bg-gray-900 p-2 rounded" placeholder="Vault Name" />
        </div>
      </div>
    </div>
  )
}