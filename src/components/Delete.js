import logo from '../logo.svg';
import {useState, useEffect, useContext} from 'react';
import Home from './Home.js';
import './Delete.css';
import { TaskContext } from "../App";
 
export default function Delete({update, id}) {
  const {taskGroup,setTaskGroup} = useContext(TaskContext);
  
  
  
  let title = taskGroup[id].title;
  let date = taskGroup[id].date;
  let description = taskGroup[id].description;
  console.log('title',title);
  console.log('date',date);
  console.log('description',description);

  function DeleteTask(e) {
    // e.preventDefault();
    let copyTaskGroup = JSON.parse(JSON.stringify(taskGroup));
    copyTaskGroup.splice(id, 1);
    setTaskGroup(copyTaskGroup);
    update(<Home update={update}/>);
    
  }
 

  return (
    <>
        <main className='delete-main'>
        <div className='delete-h1'>
          <h1>Task delete</h1>
        </div>
        <div className='delete-div'>
          <div className='delete-title-date'>
            <p>{title}</p>
            <p>{date}</p>
          </div>
          <div className='delete-description'>
            <p>{description}</p>
          </div>
        </div>
        <div className='delete-buttons-div'>
          <button className='delete-btn-cancel' onClick={() => {update(<Home update={update}/>)}}>Cancel</button>
          <button className='delete-btn-delete' onClick={() => {DeleteTask()}}>Delete</button>
        </div>
      </main>
    </>
  )
}
 