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
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Logo / App Name */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "900",
          letterSpacing: "-1px",
          marginBottom: "12px",
        }}
      >
        PayFast
      </h1>

      {/* Tagline */}
      <p style={{ fontSize: "22px", marginBottom: "48px", opacity: 0.95 }}>
        Send money in seconds — safe, simple, free.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/signup")}
          style={{
            padding: "16px 40px",
            fontSize: "19px",
            fontWeight: "600",
            backgroundColor: "white",
            color: "#6366f1",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/signin")}
          style={{
            padding: "16px 40px",
            fontSize: "19px",
            fontWeight: "600",
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "12px",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
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
 
 
