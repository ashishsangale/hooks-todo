import React,{useReducer, createContext} from 'react';
import todoReducer from '../reducers/Todos.reducer'
import useTodoState from '../hooks/useTodoState';
const defaultTodo = [
    {id: 1, task: 'task1', completed: false},
    {id: 2, task: 'task2', completed: true}
]
export const TodosContext = createContext()

export function TodosProvider(props){
    const [todos, dispatch] = useReducer(todoReducer, defaultTodo)
    return(
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}