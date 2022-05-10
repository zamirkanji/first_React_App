import React from "react";

const Overview = (props) => {
    /*destructuring assignment - taking tasks array out of passed props*/
    const {tasks} = props;
    return (
        <ul>
            {tasks.map((task) => {
                return <li className="text" key={task.id}>{task.task}</li>
            })}
        </ul>
    );
};

export default Overview