import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
function Login() {
    const navigate=useNavigate();
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("studentId", studentId);
        console.log("password", password);
        navigate("/studentdashboard");
    };
    return (
        <div className="login-container">
            <h1>Student Login</h1>
            
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Student Id" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>

            </form >
        </div>
    );
}
export default Login;
