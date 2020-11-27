import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export default function Todolist(props) {
    const todos = props.todos.map(todo => (
        
        <List>
            <>
            <ListItem>
                <ListItemText>
                    {todo.task}
                </ListItemText>
            </ListItem>
            <Divider/>
            </>
        </List>
    ))
    return (
        <Paper>
            {todos}
        </Paper>
    )
}
