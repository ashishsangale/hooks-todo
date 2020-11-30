import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'; 

function TodoItem(props) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={props.completed} onClick={() => props.updateTodo(props.id)}/>
           <ListItemText style={{textDecoration: props.completed? 'line-through': 'none'}}>
                {props.task}
           </ListItemText>
           <ListItemSecondaryAction>
               <IconButton onClick={() => props.removeTodo(props.id)}>
                   <DeleteIcon/>
               </IconButton>
               <IconButton>
                   <EditIcon/>
               </IconButton>
           </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoItem;
