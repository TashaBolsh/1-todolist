import {TasksStateType, TodolistType} from '../App';
import {AddTodolistAC, todolistsReduser} from './todolist-reduser';
import {tasksReducer} from './tasks-reduser';


test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistType> = [];

    const action = AddTodolistAC("new todolist")
    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReduser(startTodolistsState, action);

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});
