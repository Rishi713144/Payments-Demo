import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f4f6f9",
      flexDirection: "column",
      gap: "20px"
    }}>
      <h1>Welcome!</h1>
      <button
        onClick={() => navigate("/signup")}
        style={{
          padding: "14px 32px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        Get Started – Sign Up
      </button>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
 
 
