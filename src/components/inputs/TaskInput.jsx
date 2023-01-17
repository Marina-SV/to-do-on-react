import React from 'react';
import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
    return (
        <input {...props}
               className={classes['task-input']}
        />
    );
};

export default TaskInput;