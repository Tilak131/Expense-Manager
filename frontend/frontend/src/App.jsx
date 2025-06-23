import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const { token } = useContext(AuthContext);
  const [tab, setTab] = useState("expense");

  return (
    <Router>
      <Navbar />
      <div className="flex">
        {token}
        <div className={`flex-1 p-4 ${token ? 'ml-0 md:ml-64' : ''}`}>
          <Routes>
            <Route
                          path="/"
                          element={
                            token ? (
                              <Home tab={tab} setTab={setTab} />
                            ) : (
                              <Navigate to="/login" />
                            )
                          }
                        />
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to={token ? '/' : '/login'} />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
