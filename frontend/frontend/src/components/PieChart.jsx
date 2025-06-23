import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function ExpensePie({ data }) {
  const COLORS = ['#0088FE','#00C49F','#FFBB28','#FF8042','#AA336A','#9900CC'];
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
