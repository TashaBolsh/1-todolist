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
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {
let [title, setTitle]=useState("");
let [error, setError]=useState<string | null> (null)

const onAllClickHandler =()=>props.changeFilter("all");
const onActiveClickHandler =()=>props.changeFilter("active");
const onCompletedClickHandler =()=>props.changeFilter("completed");


 const tsarFooHandler=(e:ChangeEvent<HTMLInputElement>)=>{
     setTitle(e.currentTarget.value)
 }

 const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
     if(e.key === 'Enter') {
         props.addTask(title)
         setTitle("");
     }
 }

 const addTask = () => {
     if(title.trim()!="") {
         props.addTask(title.trim());
         setTitle("");
     }
 }
 const onChangeHandler =(e:ChangeEvent<HTMLInputElement>) => {
   setTitle(e.currentTarget.value)
 }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={tsarFooHandler}
                       onKeyDown={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        const onCliclHandler = () => props.removeTask(t.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked;
                            props.changeTaskStatus(t.id, e.currentTarget.checked);
                        }
                        return <li key={t.id}>

                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onCliclHandler}>x</button>
                        </li>
                    })
                    }
                    </ul>
                    <div>
                    <button onClick={onAllClickHandler}>All</button>
                    <button onClick={onActiveClickHandler}>Active</button>
                    <button onClick={onCompletedClickHandler}>Completed</button>
                    </div>
                    </div>
                    );
                }