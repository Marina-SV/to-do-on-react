import React from 'react';
import classes from "./TaskText.module.css";


const TaskText = (props) => {

    const {id, text} = props.task;
    return (
        <label className={classes['task-list-label']}>
            <input className={classes['checkbox-style']} type='checkbox'/>
            <span>{text}</span>
        </label>
    )
};

export default TaskText;