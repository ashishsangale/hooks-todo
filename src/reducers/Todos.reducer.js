import uuid from 'uuid/dist/v4';

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD':
            return [...state,{id:uuid(), task:action.task, completed: false}];
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'UPDATE':
            return state.map(todo => 
                todo.id === action.id ? {...todo, completed: !todo.completed}: todo);
        case 'EDIT':
            return state.map(todo => 
                todo.id === action.id ? {...todo, task: action.newTask}: todo)
        default:
            return state
    }
}

export default reducer;