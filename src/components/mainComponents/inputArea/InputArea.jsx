import React, {useState} from 'react';
import AddTaskBtn from "../../buttons/addTask/AddTaskBtn";
import TaskInput from "../../inputs/TaskInput";
import classes from "./InputArea.module.css";

const InputArea = (props) => {

    const {add} = props;

    const [task, setTask] = useState({text: ''})

    const createTask = (event) => {
        event.preventDefault();

        const newTask = {
            id: crypto.randomUUID(),
            ...task
        }

        add(newTask);
        setTask({text: ''})
    }


    return (
        <div className={classes['add-task-area']}>
            <TaskInput
                type="text"
                placeholder={"Add New Task"}
                value={task.text}
                onChange={(event) => setTask({...task, text: event.target.value})}
                />
            <AddTaskBtn onClick={createTask}/>
        </div>
    );
};

export default InputArea;