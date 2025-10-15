import React,{ useState } from "react";

function App() {

  const [list,setList]=useState([]);
  const [input,setInput]=useState("");

  function handleChange(event) {
    const newTask=event.target.value;
    setInput(newTask);
  }
  function addTask() {
    setList((list)=>{
      return[...list,input];
    })
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input}/>
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((task,index)=><li key={index}>{task}</li>)}       
        </ul>
      </div>
    </div>
  );
}

export default App;
