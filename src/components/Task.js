import React from 'react'

export default function Task({renderTask,renderStt,OnEdit}) {
    // console.log("renderTask:" ,renderTask)
    let Task = renderTask
    //level with style
    let elementLevel = ""
    
    const handleEdit=()=>{
        OnEdit(true,"Update",Task) 
    }

    switch(Task.level){
        case 'High':
            elementLevel = (<span className="label label-danger">High</span>);
            break;
        case 'Small':
            elementLevel = (<span class="label label-default">Small</span>);
            break;
        case 'Medium':
            elementLevel =(<span class="label label-info">Medium</span>);
            break;
    }
    
  return (
    <>
         <tr>
            <td className="text-center">{renderStt}</td>
            <td>
                    {Task.taskName}
            </td>
            <td className="text-center">
                 {elementLevel}
            </td>
            <td>
              <button type="button" className="btn btn-warning"
                    onClick={handleEdit}
              >
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
    </>
  )
}
