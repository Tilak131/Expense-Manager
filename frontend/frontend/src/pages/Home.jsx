import { useState, useEffect, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpensePie from '../components/PieChart';


export default function Home() {
  const { token } = useContext(AuthContext);
  const [tab, setTab] = useState('expense');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const fetch = async () => {
    const res = await api.get('http://localhost:5000/api/expenses', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setItems(res.data);
  };

  useEffect(() => { if (token) fetch(); }, [token]);

  const addOrUpdate = async (data) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    let res;
    if (data._id) {
      res = await api.put(`http://localhost:5000/api/expenses/${data._id}`, data, config);
    } else {
      res = await api.post('http://localhost:5000/api/expenses', data, config);
    }
    setEditItem(null);
    fetch();
  };

  const deleteItem = async (id) => {
    await api.delete(`http://localhost:5000/api/expenses/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetch();
  };

  const pieData = items
    .filter(i => tab === 'chart' ? true : i.type === tab)
    .reduce((acc, { category, amount }) => {
      const idx = acc.findIndex(c => c.category === category);
      idx >= 0 ? (acc[idx].value += amount) : acc.push({ category, value: amount });
      return acc;
    }, []);

  return (
    
    <div className="flex flex-col md:flex-row flex-1 p-4 animate-fadeIn">
      <Sidebar tab={tab} setTab={setTab} />
      <div className="flex-1 p-4 animate-fadeIn">
        {tab !== 'chart' && (
          <>
            <ExpenseForm token={token} addOrUpdate={addOrUpdate} editItem={editItem}/>
            <ExpenseList items={items.filter(i => i.type === tab)} onEdit={setEditItem} onDelete={deleteItem}/>
          </>
        )}
        {tab === 'chart' && <ExpensePie data={pieData} />}
      </div>
    </div>
    
  );
}
