import React, {useEffect} from 'react';
import useTodoState from './hooks/useTodoState';
import Todolist from './Todolist';
import Todoform from './Todoform';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

function Todo() {

    const todolist = []
    const{todos, addTodo, removeTodo, updateTodo, editTodo} = useTodoState(todolist)

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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
                    <Todolist todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} editTodo={editTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Todo;
