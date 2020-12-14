import React,{ createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/Todos.reducer';
const defaultTodo = [
    {id: 1, task: 'task1', completed: false},
    {id: 2, task: 'task2', completed: true}
]
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodo, todoReducer)
    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}