

function Taskadd({onAdd,showAdda}) {
    return (
        <div>
            <button onClick={onAdd} className=" absolute border mt-2 ml-24 border-blue-800 text-blue-600 rounded px-2 py-1 hover:bg-blue-400 hover:text-white hover:border-white focus:bg-blue-800 font-medium">Add Task</button>
        </div>
    )
}

export default Taskadd
