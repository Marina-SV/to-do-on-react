import React from 'react';
import classes from "./TaskText.module.css";


const TaskText = (props) => {

    const {text} = props.task;
    return (
        <label className={classes['task-list-label']}>
            <input type='checkbox' className={classes['checkbox-style']} />
            <span>{text}</span>
        </label>
    )
};

export default TaskText;