import React, {useState} from 'react';
import classes from '../inputArea/Container.module.css';
import InputArea from "../inputArea/InputArea";

import TasksList from "../../taskList/TasksList";
import Title from "../title/Title";



const Container = () => {

    const [tasksList, setList] = useState([])

    function addTask(task) {
        setList([...tasksList, task])
    }

    function removeTask(id) {
        setList(tasksList.filter(item => item.id != id))
    }

    return (
        <div className={classes['main-container']}>
            <Title />
            <InputArea add={addTask}/>
            <TasksList remove={removeTask} tasks={tasksList}/>
        </div>
    );
};

export default Container;