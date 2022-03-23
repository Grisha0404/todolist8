import {TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: todolistsReducerType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            /*setTodolists(todolists.filter(tl => tl.id != id));
            delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
            setTasks({...tasks});*/
            return state.filter(el => el.id !== action.payload.todolistId1)
        case "ADD-TODOLIST":
            //let newTodolistId = v1();
            let newTodolist: TodolistType = {id: v1(), title: action.payload.title, filter: 'all'};
            //setTodolists([newTodolist, ...todolists]);
            /*setTasks({
                ...tasks,
                [newTodolistId]: []
            })*/
            return [...state,newTodolist]
        case "CHANGE-TODOLIST-TITLE":
            /*const todolist = todolists.find(tl => tl.id === id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = title;
                setTodolists([...todolists]);
            }*/
            return state.map(el=> el.id === action.payload.todolistId2? {...el, title:action.payload.newTodolistTitle}:el)
        case "CHANGE-TODOLIST-FILTER":
            /*let todolist = todolists.find(tl => tl.id === todolistId);
            if (todolist) {
                todolist.filter = value;
                setTodolists([...todolists])
            }*/
            return state.map(el=> el.id === action.payload.todolistId2? {...el,filter: action.payload.newFilter}:el)
        default:
            return state
    }
}

export type todolistsReducerType = removeTodolistACType | changeTodolistFilterAC | changeTodolistTitleACType | addTodolistACType

export type changeTodolistFilterAC = ReturnType<typeof changeTodolistFilterAC>
export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export type addTodolistACType = ReturnType<typeof addTodolistAC>
export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId1}
    } as const
};
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }
    } as const
}
export const changeTodolistTitleAC = (todolistId2:string, newTodolistTitle:string) =>{
    return{
        type:'CHANGE-TODOLIST-TITLE',
        payload:{
            todolistId2,
            newTodolistTitle
        }
    }as const
}
export const changeTodolistFilterAC = (todolistId2:string, newFilter:string)=>{
    return{
        type:'CHANGE-TODOLIST-FILTER',
        payload:{
            todolistId2,
            newFilter
        }

    }as const
}