import React,{useContext} from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import {DispatchContext} from './context/Todos.Context';

function EditTodoForm({ id, task, toggle }) {
    const[value, handleChange, reset] = useInputState(task)
    const dispatch = useContext(DispatchContext)
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({type: 'EDIT', id: id, newTask: value});
            reset();
            toggle();
        }}
        style={{marginLeft: '1rem', width: '50% '}}>
            <TextField
            margin='normal'
            value = {value}
            onChange={handleChange}
            fullWidth
            autoFocus
            />
        </form>
    )
}

export default EditTodoForm;