import React from 'react';
import TodoItem from './TodoItem'
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
                   <TodoItem 
                   task={todo.task}
                   id={todo.id} 
                   key={todo.id} 
                   completed={todo.completed} 
                   removeTodo={props.removeTodo}
                   updateTodo={props.updateTodo}
                   editTodo={props.editTodo}/>
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
