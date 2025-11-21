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
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "16px",
        }}
      >
        Welcome to PayFast
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.95 }}>
        Send money instantly. Zero fees. Fully secure.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/signup")}
          style={{
            padding: "16px 36px",
            fontSize: "18px",
            fontWeight: "600",
            backgroundColor: "white",
            color: "#635bff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "translateY(-3px)")}
          onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/signin")}
          style={{
            padding: "16px 36px",
            fontSize: "18px",
            fontWeight: "600",
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: "12px,
            cursor: "pointer",
            backdropFilter: "blur(10px)",
          }}
        >
          Sign In
        </button>
      </div>
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
 
 
