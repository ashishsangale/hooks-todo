import useLocalStorageState from './useLocalStorageState'
import uuid from 'uuid/dist/v4';

// eslint-disable-next-line import/no-anonymous-default-export
export default initialTodo => {    
    const [todos, setTodos] = useLocalStorageState('keys',initialTodo)
    const addTodo = newTodoText => {
        setTodos([...todos,{id:uuid(), task:newTodoText, completed: false}])
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