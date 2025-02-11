import { useState, useEffect, useContext } from 'react';
import './Home.css';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';
import { TaskContext } from "../App";
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CurrentTask({state,id,iconTag, title, date,handleClick }) {
  
  return (
    <>
      <div className='Home-task-header-c' id={id}>
        <div className='Home-task-header-state-c'>
          {iconTag}
        </div>
        <h2 className='Home-task-header-title-c'>{title}</h2>
        <h2 className='Home-task-header-date'>{date}</h2>
        <div className='Home-task-header-actions'>
          <FontAwesomeIcon icon={faPenToSquare} value={1} onClick={handleClick} id={id}/>
          <FontAwesomeIcon icon={faTrashCan} value={0} onClick={handleClick} id={id}/>
        </div>
      </div>
    </>
  );
}

export default function Home({update,_task}) {
  
  // const [taskGroup,setTaskGroup]=useState([]);
  const {taskGroup,setTaskGroup} = useContext(TaskContext);
  
  let [iconTag,setIconTag] = useState(<FontAwesomeIcon icon={faCircle} value={'off'} onClick={handleClick} />);
  
  function handleClick(e){
    const currentValue = e.currentTarget.getAttribute('value');
      if(currentValue==0){
      //throw delete
      update(<Delete update={update} id={e.currentTarget.id}/>);
    }
    else if(currentValue==1){
      //throw edit
      update(<Edit update={update} id={e.currentTarget.id}/>);
      console.log(e.currentTarget.parentNode);
      console.log(e.currentTarget.parentNode.parentElement);
      console.log(e.currentTarget.parentNode.parentNode.parentElement); 
      }
    else if (currentValue === 'on') {
    setIconTag(
      <FontAwesomeIcon icon={faCircle} value="off" onClick={handleClick} />
      );
      e.currentTarget.setAttribute('value', 'off');
      e.currentTarget.firstChild.setAttribute('d',faCircle.icon[4]);
      e.currentTarget.parentNode.parentElement.classList.remove("Home-task-done");
      
      
    } else if (currentValue === 'off') {

      e.currentTarget.parentNode.parentElement.classList.add("Home-task-done");
      e.currentTarget.firstChild.setAttribute('d',faCircleCheck.icon[4]);
      e.currentTarget.setAttribute('value', 'on');
    }
  }



  useEffect(() => {
    if (_task) {
      const tmp = [...taskGroup];
      tmp.push(_task);
      setTaskGroup(tmp);
    }
    return
  }, [_task]);

  const done = taskGroup.map((task, i) => (
    <CurrentTask key={i}  state='off' id={i} iconTag={iconTag} title={task.title} date={task.date} handleClick={handleClick} />
  ));


  return (
    <>
      <main className='Home-main'>
        <div className='Home-create-btn-div'>
          <button className='Home-create-btn' onClick={() => update(<Create update={update} />)}>Create Task</button>
        </div>
        <div className='Home-task-header'>
          <h2 className='Home-task-header-state'>State</h2>
          <h2 className='Home-task-header-title'>Title</h2>
          <h2 className='Home-task-header-date'>Date</h2>
          <h2 className='Home-task-header-actions'>Actions</h2>
        </div>
        <div className='Home-task-container'>
          {done.length ? done : <p>No tasks available</p>}
        </div>
      </main>
    </>
  )
}