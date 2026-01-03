# react
import{ useState}from "react";
function App() {
  const [task,setTask]=useState([])
  const [text,setText]=useState("")

  const addTask=()=>{
    setTask([...task,{name:text,completed:false}])
    setText("")
  }
      const deleteTask=(index)=>{
        setTask(...tasks.filter((_,i)=> !== index))
  }

  }
  return(
    <>
      <h1>To-do List</h1>
      <input 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Enter Task"
      />
      <button onclick={addTask}>Add</button>
      <ul>
        {task.map((task,index)=>(
          <li key={index}>
            <input 
            type="checkbox"
            checked={task.complete}
            />
            <span>{task.name}</span>
            <button onclick={deleteTask(index)}delete></button>

          </li>
        ))}
      </ul>
      </>
  )


  export default App

