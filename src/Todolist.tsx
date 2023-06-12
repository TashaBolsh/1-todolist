import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title:string) => void
    changeIsDone:(id:string, newIsDone: boolean)=>void
}

export function Todolist(props: PropsType) {
const [newTaskTitle, setNewTaskTitle]=useState("");

const onAllClickHandler =()=>props.changeFilter("all");
const onActiveClickHandler =()=>props.changeFilter("active");
const onCompletedClickHandler =()=>props.changeFilter("completed");


 const tsarFooHandler=(e:ChangeEvent<HTMLInputElement>)=>{
     setNewTaskTitle(e.currentTarget.value)
 }

 const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
     if(e.key === 'Enter') {
         props.addTask(newTaskTitle)
         setNewTaskTitle("");
     }
 }

 const addTask = () => {
     if(newTaskTitle.trim())
     props.addTask(newTaskTitle.trim());
     setNewTaskTitle("");
 }
 const onChangeHandler =(e:ChangeEvent<HTMLInputElement>) => {
   setTitle(e.currentTarget.value)
 }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={tsarFooHandler}
                       onKeyDown={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t =><li key={t.id}>

                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={(e) => {
                            props.removeTask(t.id)}}>x
                        </button>
                    </li>)}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}