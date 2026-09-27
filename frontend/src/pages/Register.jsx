import { useState } from "react";
function Register() {
    const [name, setName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !studentId || !email || !branch || !year || !password || !confirmPassword) {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Name:", name);
        console.log("Student ID:", studentId);
        console.log("Email:", email);
        console.log("Branch:", branch);
        console.log("Year:", year);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Student Registration</h1>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) =>
                    setName(e.target.value)} />

                <input type="text" placeholder="Enter Your Id" value={studentId}
                    onChange={(e) => setStudentId(e.target.value)} />

                <input type="text" placeholder="Enter Your Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input type="text" placeholder="Enter Your Branch" value={branch}
                    onChange={(e) => setBranch(e.target.value)} />

                <input type="text" placeholder="Enter Your Year" value={year}
                    onChange={(e) => setYear(e.target.value)} />

                <input type="Password" placeholder="Enter Your Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <input type="Password" placeholder="Confirm Your Password" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;