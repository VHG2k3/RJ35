import React from 'react'
import Task from './Task'

export default function ListTask({renderListTask,OnAppEdit}) {

    const handleEdit =(toggle,action,task)=>{
        OnAppEdit(toggle,action,task)
    }

//   console.log("ListTask:",renderListTask)
  let elementTask = renderListTask.map((task,index)=>{
    return(
        <Task key={task.taskId} 
                renderTask={task} 
                renderStt={index+1}
                OnEdit = {handleEdit}
               
                />
    )
  })
    return (
    <>
         <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
               {elementTask}
                
        </tbody>
      </table>
    </div>
    </>
  )
}
