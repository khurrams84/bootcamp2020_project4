import React, { useState } from 'react';
import './App.css';
import './Room.css'

function Room() {
    const [isLit, setLit] = useState(false);
    let [age, setAge] = useState(24);

    function updateLight() {
        console.log("light buton clicked!");
        setLit(!isLit);        
    }

    const updateAge = () => {
        console.log("age buton clicked!");       
        setAge(++age);
    }

    return (
    <div className={`room ${isLit? "lit" : "dark"}`}>
        This Room is  {isLit ? "lit" : "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick={updateLight} >Toggle Light</button>
        <br/>
        <button onClick={updateAge} >Update Age</button>
    </div>
  );
}

export default Room;
