import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 text-white bg-gradient-to-br from-black via-gray-900 to-vault">
        <h2 className="text-xl font-bold mb-4">Welcome to Vaultrix, your hidden archive.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-xl shadow-inner">Recent Uploads</div>
          <div className="bg-gray-900 p-4 rounded-xl shadow-inner">Storage Usage</div>
          <div className="bg-gray-900 p-4 rounded-xl shadow-inner">Sync Logs</div>
        </div>
      </div>
    </div>
  )
}