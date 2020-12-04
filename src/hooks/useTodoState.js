import {useState} from 'react';
import uuid from 'uuid/dist/v4';

// eslint-disable-next-line import/no-anonymous-default-export
export default initialTodo => {    
    const [todos, setTodos] = useState(initialTodo)
    const addTodo = newTodoText => {
        setTodos([...todos,{id:uuid(), task:newTodoText, completed: true}])
    }

    const removeTodo = todoId => {
        const updatedTodo = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodo)
    }

    const updateTodo = todoId => {
        const updatedTodo = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed}: todo)
        setTodos(updatedTodo)
    }

    const editTodo = (todoId,newTask) => {
        const updatedTodo = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask}: todo)
        setTodos(updatedTodo)
    }
    return {
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        editTodo
    }
}