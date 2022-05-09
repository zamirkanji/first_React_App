import React from "react";

const Overview = (props) => {

    /*destructuring assignment - taking tasks array out of passed props*/
    const {tasks} = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.text}</li>
            })}
        </ul>
    );
};

export default Overview