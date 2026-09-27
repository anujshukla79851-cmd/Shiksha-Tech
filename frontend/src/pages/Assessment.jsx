import { useState } from "react";
function Assessment() {
    const[selectedAnswer, setSelectedAnswer]=useState("");
    return (
        <div>
            <h1>Assessment</h1>
            <h1>Question 1</h1>
            <p>Which language is used to style web pages?</p>
            <label>
                <input type="radio" name="answer" value="HTML"
                onChange={(e)=>setSelectedAnswer(e.target.value)} />
                HTML
            </label>

            <label>
                <input type="radio" name="answer" value="CSS"
                onChange={(e)=>setSelectedAnswer(e.target.value)} />
                CSS
            </label>

            <label>
                <input type="radio" name="answer" value="JavaScript" 
                onChange={(e)=> setSelectedAnswer(e.target.value)}/>
                JavaScript
            </label>

            <label>
                <input type="radio" name="answer" value="Python"
                onChange={(e)=>setSelectedAnswer(e.target.value)} />
                Python
            </label>
            <p>selected Answer:{SelectedAnswer}</p>
            <button>Next</button>
        </div>
    );
}
export default Assessment;