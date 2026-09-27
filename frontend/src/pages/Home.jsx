import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/api";
function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        API.get("/")
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

return (
    
    <div>
        <h1>Shiksha Tech</h1>
        <p>Bridge the Gap Between Student Skills and Industry Requirements</p>
        <p>Identify your skill gaps, verify your skills with AI,
            and become industry-ready with a personalized learning roadmap.</p>

<p>{message}</p>
        <Link to="/login"> <button>Student Login</button></Link>
        <Link to="/register"> <button>Student Register</button></Link>
    </div>
);
}
export default Home;