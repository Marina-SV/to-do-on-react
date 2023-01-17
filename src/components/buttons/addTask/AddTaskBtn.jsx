import React from 'react';
import classes from "./AddTaskBtn.module.css";

const AddTaskBtn = (props) => {
    return (
        <button className={classes['submit-task']} {...props}>+</button>
    );
};

export default AddTaskBtn;