import uniqid from 'uniqid';
import Overview from './Overview';
import React from 'react';
import { useState } from 'react';

export default function List () {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // const onSubmitTask = (e) => {
    //     e.preventDefault();
    //     setTask('');
    //     setTasks([
    //     {id: uniqid(), task: task}, ...tasks
    //     ])
    //     console.log(task, tasks);
    // }
  
  return (
    <>
      <form>
        <label className='text' htmlFor='taskInput'>Enter Task: </label>
        <input 
          onChange={e => setTask(e.target.value)}
          value={task} 
          type='text' 
          id='taskInput'
        />
        <button onClick={e => {
            e.preventDefault();
            setTask('');
            setTasks([
                ...tasks,
            {id: uniqid(), task: task}
            ])
        }} type='submit'>
          <span className='text' >Add Task</span>
        </button>
      </form>
      <Overview tasks={tasks}/>
    </>
  )
}