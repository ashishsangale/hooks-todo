import React,{createContext} from 'react';
import useTodoState from '../hooks/useTodoState';
const defaultTodo = [
    {id: 1, task: 'task1', completed: false},
    {id: 2, task: 'task2', completed: true}
]
export const TodosContext = createContext()

export function TodosProvider(props){
    const todosObj = useTodoState(defaultTodo)

    return(
        <TodosContext.Provider value={todosObj}>
            {props.children}
        </TodosContext.Provider>
    )
}