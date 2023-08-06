import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {CheckBox, Delete} from "@mui/icons-material";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
    changeTodolistTitle: (id:string, newTitle:string) => void
    filter: FilterValuesType
    removeTodolist: (removeTodoId: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title:string)=>{
        props.addTask(title, props.id);
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (newTitle:string) => {
        props.changeTodolistTitle(props.id, newTitle);
    }

const onAllClickHandler = () => props.changeFilter("all", props.id);
const onActiveClickHandler = () => props.changeFilter("active", props.id);
const onCompletedClickHandler = () => props.changeFilter("completed", props.id);



    // @ts-ignore
    return (
        <div>
            <h3> <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
            <Button onClick={removeTodolist}>x</Button>
                <IconButton area-label="delete"><Delete/></IconButton>
            </h3>
         <AddItemForm addItem={addTask}/>
            <ul>
                {
                    props.tasks.map(t => {
                        const onCliclHandler = () => props.removeTask(t.id, props.id)
                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
                        }
                        const onCangeTitleHandler = (newValue: string) => {
                         props.changeTaskTitle(t.id, newValue, props.id)
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox onChange={onChangeStatusHandler} checked={t.isDone}/>
                                    <EditableSpan title={t.title} onChange={onCangeTitleHandler}/>
                            <Button onClick={onCliclHandler}>x</Button>
                        </li>
                    })
                }
            </ul>
            <div>
                <Button sx={{mr:"2px"}} variant = {props.filter === 'all' ? "contained" : "text"}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color={"primary"} variant = {props.filter === 'active' ? "contained" : "outlined"}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button sx={{mr:"2px"}} color={"warning"} variant = {props.filter === 'completed' ? "contained" : "outlined"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    );
}


