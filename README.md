# 💰 Expense Manager - MERN Stack

A full-featured Expense Manager web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage income and expenses, view financial stats, and visualize data through charts in a clean and interactive dashboard UI.

---

## 🚀 Features

- 🔐 User Authentication (Register, Login, JWT-based protected routes)
- ➕ Add Income & Expenses
- 📋 View, Edit, and Delete Entries
- 📊 Stats Page with:
  - Current Month Income & Expense
  - Total Income & Expense
  - Latest 10 Transactions
- 🧾 Pie Chart for Income vs Expenses
- 🧭 Dashboard Sidebar Navigation (Income, Expenses, Stats, Logout)
- 🎨 Responsive UI with Tailwind CSS + Framer Motion Animations

---

## 🛠️ Tech Stack

**Frontend**  
- React.js (Vite)  
- Tailwind CSS  
- Axios  
- Framer Motion  
- Chart.js / Recharts  
- React Router  

**Backend**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  
- CORS & dotenv  

---

## ⚙️ Installation

### Prerequisites:
- Node.js and npm
- MongoDB (local or Atlas)

---

### 1. Clone the Repository

```
git clone https://github.com/your-username/Expense-Manager.git
cd Expense-Manager 
```

### 2. BackEnd SetUp
```
cd backend
npm install
```

### 3. Configure Environment Variables
Create a .env file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4.Start backend:
``` npm start ```

###  5. Frontend Setup 

```
cd frontend
npm install
npm run dev
```




