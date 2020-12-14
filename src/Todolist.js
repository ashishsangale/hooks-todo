import React,{ useContext } from 'react';
import TodoItem from './TodoItem'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { TodosContext } from './context/Todos.Context';

export default function Todolist() {
    const todos = useContext(TodosContext)
    const todolist = todos.map(todo => (
        <List>
            <>
            <ListItem>
                <ListItemText>
                   <TodoItem 
                   task={todo.task}
                   id={todo.id} 
                   completed={todo.completed} 
                  />
                </ListItemText>
            </ListItem>
            <Divider/>
            </>
        </List>
    ))
    return (
        <Paper>
            {todolist}
        </Paper>
    )
}
