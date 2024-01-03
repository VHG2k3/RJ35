import React,{useState,useEffect} from 'react'

export default function Form({renderActionName,renderTask,onSubmit}) {
  // console.log("renderTask:",renderTask);
  const task={
    taskId:0,
     taskName:"",
     level:""
  }
  const [task1,setTask]=useState(task)

  //Khi component dc mount(chay 1 lan duy nhat khi thay doi state)
  useEffect(()=>{
    if( renderActionName==="Update"){
      setTask({
        taskId:renderTask.taskId,
        taskName:renderTask.taskName,
        level:renderTask.level
      })

      console.log("Task:",task1);
    }
    else{
      setTask({
        taskId:0,
        taskName:"",
        level:""
      })
    }
  },[])
  
  //render lại dữ liệu khi state thay đổi
  useEffect(()=>{
    if( renderActionName==="Update"){
      setTask({
        taskId:renderTask.taskId,
        taskName:renderTask.taskName,
        level:renderTask.level
      })
    }
    else{
      setTask({
        taskId:0,
        taskName:"",
        level:""
      })
    }
  },[renderActionName,renderTask])
 
  //xử lý sự kiện change data
  const handleChange=(ev)=>{
      let name=ev.target.name
      let value = ev.target.value
      setTask({
        [name]:value,
      })
  }
  //xử lý sự kiện submit form
  
  const handleSubmit=(event,action)=>{
      event.preventDefault();
      if(action==="Update"){
        onSubmit(false,action,task1)
      }
      else if(action==="AddNew"){
        console.log("task trc khi:",task1);
        let num = parseInt(Math.random()*100);
        setTask({
            taskId:num,
        })
        console.log("task truyen tu form:",task1);
        onSubmit(false,action,task1)
      }
      
  }
  return (
    <>
        <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              name="taskName"
              value={task1.taskName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name='level'
              id="inputDs"
              className="form-control"
              value={task1.level}
              onChange={handleChange}
            >
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
              <option value='Small'>Small</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={(event)=>handleSubmit(event,renderActionName)}>
            {renderActionName}
          </button>
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    </div>
    </>
  )
}
