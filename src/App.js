import { useState } from "react";
import Tasks from "./components/Tasks";
import Add from  "./components/Add";
import Taskadd from "./components/Taskadd";

function App() {
  const [showAdd, setshowAdd] = useState(false) 
 const [tasks, setTasks] = useState([
   {
   id:1,
   activity:"wake up in the morning",
   date:"11/7/2020",
   time:"03:20 AM",
   },
   {
    id:2,
    activity:"wake up in the morning",
    date:"11/7/2020",
    time:"03:20 AM",
  }, 
  {
    id:3,
    activity:"wake up in the morning",
    date:"11/7/2020",
   time:"03:20 AM",
  },
 ])
 
 const addFORM = (task) =>{
 const id=Math.floor(Math.random()*1000)+1
 const newTask={id,...task}
 setTasks([...tasks,newTask])
 }

 const deleteTasks = (id) => {
   setTasks(tasks.filter((task)=>task.id!==id))
 }

  return (
    <div className=" flex flex-col items-center">
    
     <h1 className="text-indigo-800 font-semibold mt-9">MY TODO LIST</h1>
     <Taskadd onAdd={()=>setshowAdd(!showAdd)} showAdda={showAdd}/>
    {showAdd&& <Add addForma={addFORM}/>}
     {
       tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTasks}/>): <h1 className="text-red-600 mt-24">No tasks Available</h1>
     }
   

    </div>
   
  );
}

export default App;
