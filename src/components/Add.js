import {useState} from 'react'


function Add({addForma}) {


 const [activity, setActivity] = useState('')
 const [date, setDate] = useState('')
 const [time, setTime] = useState('')
 const onform=(e)=>{
     e.preventDefault()
     if(!activity||!date||!time){
         alert("first enter all details")
     }
     else{
        addForma({activity,date,time})
        setActivity("")
        setDate("")
        setTime("")
     }
    


 }
    return (
        <div>
            <form action="" className="flex flex-col gap-4 h-80 w-96 border shadow items-center mt-28 py-3" onSubmit={onform}>
                <div className="flex flex-col gap-2">
                <label htmlFor="activity" className=" font-bold text-gray-700 text-base">Activity</label>
               <input type="text" value={activity} onChange={(e)=>setActivity(e.target.value)}  placeholder="add a task" className="w-80 h-9 px-3 shadow rounded-lg bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"/>
                </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="date and time " className="font-bold text-gray-700 text-base">Date</label>
               
                  <input  type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5 w-80 h-9" placeholder="Select date"/>
            
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="date and time " className="font-bold text-gray-700 text-base">Time</label>
               
                  <input   type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5 w-80 h-9" placeholder="Select date"/>
            
            </div>
                <div className="add">
                <button className="border   border-blue-800 text-blue-600 rounded px-2 py-1 hover:bg-blue-400 hover:text-white hover:border-white focus:bg-blue-800 font-medium">Save a Task</button>
                </div>
               
           </form>
          
        </div>
    )
}

export default Add
