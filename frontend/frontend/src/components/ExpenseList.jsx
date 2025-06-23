import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function ExpenseList({ items, onEdit, onDelete }) {
  const [animate, setAnimate] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    let updatedItems = [...items];
    if (search) {
      updatedItems = updatedItems.filter(item =>
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase()) 
      );
    }
    if (sortBy === 'amount') {
      updatedItems.sort((a, b) => b.amount - a.amount);
    } else {
      updatedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setFilteredItems(updatedItems);
  }, [items, search, sortBy]);

  return (
    <div className={`overflow-x-auto mt-4 transition-opacity duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by type or category"
          className="border px-3 py-2 rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border px-3 py-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      <table className="min-w-full text-sm text-center border-collapse shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white uppercase text-xs tracking-wider">
          <tr>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredItems.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-6 text-gray-500 italic">No matching expenses.</td>
            </tr>
          ) : (
            filteredItems.map(item => (
              <tr key={item._id} className="hover:bg-gray-50 transition">
                <td className="py-2 px-4">{item.type.toUpperCase()}</td>
                <td className="py-2 px-4">{item.category}</td>
                <td
  className={`py-2 px-4 font-medium ${
    item.type === 'expense' ? 'text-red-600' : 'text-green-600'
  }`}
>
  {item.type === 'expense' ? `- ₹${item.amount}` : `+ ₹${item.amount}`}
</td>
                <td className="py-2 px-4">{new Date(item.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-yellow-500 hover:text-yellow-600 transition"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(item._id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
