 import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

function StudentDashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard">

            <h1>Student Dashboard</h1>

            {/* Welcome */}
            <section className="welcome-section">
                <h2>Welcome, Student</h2>
                <p>
                    Track your skills, identify skill gaps, and become industry-ready.
                </p>
            </section>

            {/* Profile + Skills */}
            <div className="dashboard-grid">

                {/* Profile */}
                <section>
                    <h2>My Profile</h2>

                    <p><strong>Name:</strong> Anuj Kumar</p>
                    <p><strong>Branch:</strong> CS-DS</p>
                    <p><strong>Year:</strong> 3rd Year</p>

                    <p>
                        <strong>College:</strong> Axis Institute of Technology & Management
                    </p>

                    <button onClick={() => navigate("/profile")}>
                        View Full Profile
                    </button>
                </section>

                {/* Skills */}
                <section>
                    <h2>My Skills</h2>

                    <div className="skill-item">
                        <span>HTML</span>

                        <div className="progress-bar">
                            <div className="progress html-progress"></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <span>CSS</span>

                        <div className="progress-bar">
                            <div className="progress css-progress"></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <span>JavaScript</span>

                        <div className="progress-bar">
                            <div className="progress js-progress"></div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Assessment */}
            <section className="assessment-section">
                <h2>Skill Assessment</h2>

                <p>
                    Test your technical skills and identify your current skill level.
                </p>

                <button onClick={() => navigate("/assessment")}>
                    Start Assessment
                </button>
            </section>

            {/* Skill Gaps */}
            <section>
                <h2>Skill Gaps</h2>

                <div className="gap-list">

                    <div className="gap-item">
                        <strong>JavaScript</strong>
                        <span>Needs Improvement</span>
                    </div>

                    <div className="gap-item">
                        <strong>Node.js</strong>
                        <span>Beginner</span>
                    </div>

                    <div className="gap-item">
                        <strong>MongoDB</strong>
                        <span>Needs Improvement</span>
                    </div>

                </div>
            </section>

            {/* Learning Roadmap */}
            <section>
                <h2>Learning Roadmap</h2>

                <ol className="roadmap">
                    <li>Improve JavaScript</li>
                    <li>Learn Node.js</li>
                    <li>Practice MongoDB</li>
                    <li>Build a Full Stack Project</li>
                </ol>
            </section>

        </div>
    );
}

export default StudentDashboard;