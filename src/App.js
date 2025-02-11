import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Edit from './components/Edit';
import Create from './components/Create';
import Detail from './components/Detail';
import Delete from './components/Delete';
import Footer from './components/Footer';
import {useState, useEffect, useContext, createContext} from 'react';
 
 
export const TaskContext = createContext();
 
export default function App() {
 
 
  const [taskGroup,setTaskGroup]=useState([]);
  const [display, setDisplay] = useState(null);
 
  const update = (component) => {
    if (component !== display) {
      setDisplay(component);
    }
  };
 
  return (
    <TaskContext.Provider  value={{taskGroup,setTaskGroup}} >
      <div className='App'>
        <Header />
        {display || <Home update={update}/>}
        {/* <Edit/> */}
        <Footer />
      </div>
    </TaskContext.Provider>
  );
}