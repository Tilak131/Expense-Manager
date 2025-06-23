import { FaMoneyBillWave, FaChartPie, FaWallet, FaChartLine,FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';

export default function Sidebar({ tab, setTab }) {
  

  const tabs = [
    { label: 'Expenses', value: 'expense', icon: <FaMoneyBillWave className="inline mr-2" /> },
    { label: 'Income', value: 'income', icon: <FaWallet className="inline mr-2" /> },
    { label: 'Charts', value: 'chart', icon: <FaChartPie className="inline mr-2" /> },
    { label: 'Stats', value: 'Stats', icon: <FaChartPie className="inline mr-2" /> },
  ];
  

  

  return (
    <div className="min-h-screen w-full md:w-64 bg-gradient-to-b from-gray-100 to-gray-200 shadow-md p-5 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Dashboard</h2>
      
      <div className="space-y-3">
        {/* State-based buttons (internal tabs) */}
        {tabs.map(({ label, value, icon }) => (
          <button
            key={value}
            onClick={() => setTab(value)}
            className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-300 font-medium hover:bg-blue-100 hover:text-blue-700 ${
              tab === value ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700'
            }`}
          >
            
            {icon}
            {label}
          </button>
        ))}

        {/* Route-based link (stats page) */}
       

        
      </div>
    </div>
  );
}