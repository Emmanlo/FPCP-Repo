import { useState } from "react"; // For managing state
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // For multi-page routing
import { useLocation } from "react-router-dom"; // For getting the current location. For example, to check if the user is on the login page 
import Login from "./pages/Login"; // 👈 Import your Login page
import Categorization from "./pages/Categorization";
import FirstTimers from "./pages/FirstTimers";
import "./styles/categorization.css";

function App() {
const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility 
const location = useLocation();
const hideNavbar = location.pathname === "/";

return ( // App component
    <div className="app-container">
      {/* ✅ Navbar (Fixed at the top) */}
      {!hideNavbar && (
        <nav className="navbar">
        <div className="logo">2025 Jet Cinco</div>

          {/* ✅ Desktop Navigation Links */}
          <ul className="nav-links">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Categorization">Categorization</Link></li>
            <li><Link to="/First-Timers">First Timers</Link></li>
            <li><Link to="/summary-report">Summary Report</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>

          {/* ✅ Mobile Menu Button */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* ✅ Mobile Dropdown Menu (only visible when menuOpen is true) */}
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      )}

      {/* Route paths */}
      <main className="container">
          <Routes>
            <Route path="/Home" element={<h1>Welcome to the FPCP Members Portal</h1>} />
            <Route path="/" element={<Login />} />
            <Route path="/Categorization" element={<Categorization/>}/>
            <Route path="/First-Timers" element={<FirstTimers/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>} />
            
          </Routes>
      </main>

      {!hideNavbar && (
        <footer>
          <p>&copy; 2025 FPCP Members Portal</p>
        </footer>
      )}
    </div>
);
}

export default App;
// App.jsx