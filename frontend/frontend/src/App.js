import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StatsPage from "./pages/Stats";

function AppRoutes() {
  const { token } = useContext(AuthContext);
  const [tab, setTab] = useState("expense");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-1">
          <Routes>
            <Route
              path="/"
              element={<Navigate to={token ? "/home" : "/login"} />}
            />
            <Route
              path="/home"
              element={
                token ? (
                  <Home tab={tab} setTab={setTab} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!token ? <Login /> : <Navigate to="/home" />}
            />
            <Route
              path="/register"
              element={!token ? <Register /> : <Navigate to="/home" />}
            />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<Navigate to={token ? "/home" : "/login"} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
