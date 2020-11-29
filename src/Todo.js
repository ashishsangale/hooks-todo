import React, {useState} from 'react';
import Todolist from './Todolist';
import Todoform from './Todoform';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

function Todo() {
    const todolist = [
        {id:1, task: 'Complete Onboarding', completed: true},
        {id:2, task: 'Track HDFC application', completed: false},
        {id:3, task: 'designated survivour', completed: false}
    ]
    const [todos, setTodos] = useState(todolist)
    const addTodo = newTodoText => {
        setTodos([...todos,{id:4, task:newTodoText, completed: true}])
    }

    return (
        <Paper style={{
            padding: '0',
            margin: '0',
            height: '100vh',
            backgroundColor: '#fafafa'
        }}>
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography variant='inherit' justify='center'>Todo List</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <Todoform addTodo={addTodo}/>
                    <Todolist todos={todos}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Todo;
