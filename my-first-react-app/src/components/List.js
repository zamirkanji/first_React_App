import uniqid from 'uniqid';
import Overview from './Overview';
import React from 'react';
import { useState } from 'react';

export default function List () {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [buttonClicked, setButtonState] = useState(false);

    const clearTasks = () => {
        return setTasks([])
    }

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
                setButtonState(true);
                setTask('');
                setTasks([
                    ...tasks,
                {id: uniqid(), task: task}
                ])
            }} type='submit'>
                <span className='text' >Add Task</span>
            </button>
        </form>
        {buttonClicked === true ? <Overview tasks={tasks} setTasks={setTasks}/> : null}
        <div id='clear-all-container'>    
            {tasks.length > 0 ? 
                <button id='clear-all' onClick={clearTasks}>
                    Clear All Items
                </button> : null
            }
        </div>
        
    </>
    )
}