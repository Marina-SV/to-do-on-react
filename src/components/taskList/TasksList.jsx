import React from 'react';
import TaskItem from "../task/TaskItem";
import classes from "./TaskList.module.css";



const TasksList = (props) => {
    const {tasks, remove} = props;

    return (
        <ul className={classes['task-list']}>
            {tasks.map(task => <TaskItem remove={remove} task={task}/>)}
        </ul>
    );
};

export default TasksList;