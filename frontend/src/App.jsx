import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import Assessment from "./pages/Assessment";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;