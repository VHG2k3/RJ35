import React, { createContext,useState } from 'react'
import Control from './components/Control'
import Form from './components/Form'
import ListTask from './components/ListTask'

export const Task = createContext();
export default function App() {

  // 6.1 Mock data
  const listTasks = [
    {taskId:1, taskName:"Học lập trình frontend",level:"Small"},
    {taskId:2, taskName:"Học lập trình reactjs",level:"Medium"},
    {taskId:3, taskName:"Lập trình với Frontend - Reactjs",level:"High"},
    {taskId:4, taskName:"Lập trình Fullstack (PHP, Java, NetCore)",level:"Small"},
  ]
  // const [listLenght,setListLenght] = useState(listTasks.length)
  // console.log("Lenght:",listTasks.length)
  const [isToggle,setToggle] = useState(false);
  const [actionName,setActionName]=useState('');
  //Tạo state
  const [listTask,setListTask] = useState(listTasks);
  const [task,setTask] = useState({})

  //xử lý sự kiện ẩn hiện form khi ấn Add or edit
  const handleAdd=(toggle,action)=>{
      setToggle(toggle);
      setActionName(action);
  }
  // console.log("action App:",actionName)
  const handleEdit=(toggle,action,task)=>{
    setToggle(toggle);
    setActionName(action);
    setTask(task);
}

//Xử lý sự kiện submit form cho chức năng add và update
const handleSubmit=(toggle,action,t)=>{
  // console.log("Task truyen len khi add",t);
  setToggle(toggle);
  setActionName(action);
  if(action==="AddNew"){
      listTask.push(t);
      console.log("List:",listTask);
      setListTask(listTask);
  }
  else if(action==="Update"){
    console.log("List:",t.taskId,t.taskName,t.level);
      for(let i=0; i<listTask.length;i++){
        if(listTask[i].taskId===t.taskId){
              listTask[i]=t;
              break;
        }
      }
  }
}

// console.log("Task App:",task);
  let elementForm = isToggle===true?<Form renderActionName={actionName}
                                         renderTask={task} 
                                         onSubmit={handleSubmit}
                                        

                                         />:""
  return (
    <div className="container">
    {/* TITLE : START */}
    <div className="page-header">
      <h1>
        Project 03 - ToDo List <small>React-Hooks</small>
      </h1>
    </div>
    {/* TITLE : END */}
    {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control OnAdd={handleAdd}/>
    {/* CONTROL (SEARCH + SORT + ADD) : END */}
    {/* FORM : START */}
         {elementForm}
    {/* FORM : END */}
    {/* LIST : START */}
   
        <ListTask renderListTask={listTask} OnAppEdit={handleEdit}/>


  </div>
 
  )
}
