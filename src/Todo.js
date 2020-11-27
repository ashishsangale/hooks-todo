import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid'
import Todolist from './Todolist';

function Todo() {
    const todolist = [
        {id:1, task: 'Complete Onboarding', completed: true},
        {id:2, task: 'Track HDFC application', completed: false},
        {id:3, task: 'designated survivour', completed: false}
    ]
    const [todos, setTodos] = useState(todolist)

    return (
        <Paper style={{
            padding: '0',
            margin: '0',
            height: '100vh',
            backgroundColor: '#fafafa'
        }}>
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography variant='inherit'>Todo List</Typography>
                </Toolbar>
            </AppBar>
            <Todolist todos={todos}/>
        </Paper>
    )
}

export default Todo;
