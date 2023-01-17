import React from 'react';
import classes from "./TaskItem.module.css";
import RemoveBtn from "../buttons/removeTask/RemoveBtn";
import TaskText from "./TaskText";



const TaskItem = (props) => {
    const {remove, task } = props

    return (
        <li className={classes['task-list-item']}>
            <TaskText task={task}/>
            <RemoveBtn id={task.id} remove={remove}/>
        </li>

    );
};

export default TaskItem;