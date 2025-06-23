import { useState, useEffect } from 'react';
export default function ExpenseForm({ token, addOrUpdate, editItem }) {
  const init = editItem || { type: 'expense', category: '', amount: '', date: '' };
  const [form, setForm] = useState(init);

  useEffect(() => setForm(editItem || init), [editItem]);

  const submit = (e) => {
    e.preventDefault();
    addOrUpdate(form);
    setForm(init);
  };

  return (
    <form onSubmit={submit} className="space-y-2 p-4 border rounded shadow-sm hover:shadow-md transition bg-gray-200">
      <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full p-2">
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full p-2 border" />
      <input type="number" placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} className="w-full p-2 border" />
      <input type="date" value={form.date.slice(0, 10)} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full p-2 border" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {editItem ? 'Update' : 'Add'} Item
      </button>
    </form>
  );
}
