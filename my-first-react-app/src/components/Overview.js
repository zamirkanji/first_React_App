import React from "react";

const Overview = ({tasks, setTasks}) => {
    /*destructuring assignment - taking tasks array out of passed props*/
    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <li className="text" key={task.id}>
                        {task.task}
                        {' '}
                        {/* <button onClick={setTasks(tasks.filter(a => a.id !== task.id))}>
                            Delete Task
                        </button> */}
                        <button>
                            Delete Task
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Overview