import React from 'react';
import Todolist from './Todolist';
import Todoform from './Todoform';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { TodosProvider } from './context/Todos.Context';

function Todo() {
    return (
        <Paper style={{
            padding: '0',
            margin: '0',
            height: '100vh',
            backgroundColor: '#fafafa'
        }}>
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography variant='inherit' justify='center'>Hooks Todo</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <Todoform/>
                        <Todolist/>
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Todo;
