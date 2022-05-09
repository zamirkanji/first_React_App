// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import uniqid from 'uniqid';
import Overview from './components/Overview';



function App() {

  useState = {
    task: {
          text: '',
          id: uniqid()
        },
        tasks: []
  }

  // const [task, setTask] = useState('');
  const {task, tasks} = useState;


  const handleChange = (e) => {
    // setTask(e.target.value);
    return useState = {
      task: {
        text: e.target.value,
        id: task.id,
      }
    };
  };

  const onSubmitTask = (e) => {
    e.preventDefault();

    console.log(tasks);
    useState = {
      tasks: tasks.concat(task),
      task: {
        text: '',
        id: uniqid()
      },
    };
  }
  

  return (
    <div>
      <form onSubmit={onSubmitTask}>
        <label htmlFor='taskInput'>Enter Task: </label>
        <input 
          onChange={handleChange}
          value={task.text} 
          type='text' 
          id='taskInput'
        />
        <button type='submit'>
          Add Task
        </button>
      </form>
      <Overview tasks={tasks}/>
    </div>
  );
}

export default App;
