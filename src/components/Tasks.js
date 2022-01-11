import Task from "./Task"

function tasks({tasks,onDelete}) {
    return (
<>
    <div className="flex flex-col gap-40 mt-9">
            
         <div className="flex flex-col">    
            { tasks.map((task) =>(
               
              <Task key={task.id} task={task} onDelete={onDelete}/>
                
            )
            )
           }
        </div>
     </div>
        <br /><br />
</>
    )
}

export default tasks
