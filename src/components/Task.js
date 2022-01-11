import { FaTimes } from "react-icons/fa";

function Task({task,onDelete}) {
    return (
        <div>
             <div className="bg-gray-300 flex mt-2 rounded overflow-hidden w-96 justify-between">
                <div className="bg-gray-300 py-4 mt-1 flex flex-col  px-5  ">
                
                    <h2  className=" font-medium text-gray-900">{task.activity}</h2>
                    <div className="flex gap-5">
                    <h2 className=" font-medium text-gray-600">{task.date}</h2>
                    <h2  className=" font-medium text-gray-600">{task.time}</h2>
                    </div>
                    </div>
                
               <FaTimes className="mt-2 mr-2 text-red-600 hover: cursor-pointer" onClick ={() =>onDelete(task.id)}/>
                </div>
        </div>
    )
}

export default Task
