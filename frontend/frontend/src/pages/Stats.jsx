// pages/Stats.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const StatsPage = () => {
  const { token } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [tab, setTab] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [token]);

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading stats...</div>;
  if (!stats) return <div className="text-center mt-10 text-red-500">No data available</div>;

  return (
    
    <div className="flex">
      
      <Sidebar tab={tab} setTab={setTab} />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <motion.div
      className="p-3 max-w-auto "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Statistics Dashboard</h1>

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-400">
            <h3 className="text-gray-700 font-semibold">Income This Month</h3>
            <p className="text-2xl text-green-600 mt-2 font-bold">₹{stats.monthlyIncome}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-400">
            <h3 className="text-gray-700 font-semibold">Expenses This Month</h3>
            <p className="text-2xl text-red-600 mt-2 font-bold">₹{stats.monthlyExpense}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-600">
            <h3 className="text-gray-700 font-semibold">Total Income</h3>
            <p className="text-2xl text-green-700 mt-2 font-bold">₹{stats.totalIncome}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-600">
            <h3 className="text-gray-700 font-semibold">Total Expenses</h3>
            <p className="text-2xl text-red-700 mt-2 font-bold">₹{stats.totalExpense}</p>
          </div>
        </div>

        {/* Latest Incomes */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-green-700 mb-3">🟢 Latest 10 Incomes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-green-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Category</th>
                </tr>
              </thead>
              <tbody>
                {stats.latestIncome.map((item, index) => (
                  <tr key={item._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">- ₹{item.amount}</td>
                    <td className="px-4 py-2">{item.category}</td>
                  </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>

        {/* Latest Expenses */}
        <div>
          <h2 className="text-xl font-semibold text-red-700 mb-3">🔴 Latest 10 Expenses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-red-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Category</th>
                </tr>
              </thead>
              <tbody>
                {stats.latestExpense.map((item, index) => (
                  <tr key={item._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2 text-red-600 font-semibold">- ₹{item.amount}</td>
                    <td className="px-4 py-2">{item.category}</td>
                  </tr>
                ))}
              </tbody>
             
              
            </table>
          </div>
        </div>
</motion.div>
      </div>
    </div>
    
  );
};

export default StatsPage;
