import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reduser";
import {todolistsReduser} from "./todolist-reduser";
import {TasksStateType, TodolistType} from "../AppWithRedux";

const rootReducer = combineReducers({
    todolists: todolistsReduser ,
    tasks: tasksReducer
})

type AppRootsState = {
    todolists: Array<TodolistType>
    tasks: TasksStateType
}
export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;