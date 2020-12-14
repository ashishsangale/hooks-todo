import React,{useContext} from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'; 
import { TodosContext } from './context/Todos.Context';

function TodoItem({id, task, completed}) {
    const [isEditing, toggle] = useToggleState(false)
    const {dispatch} = useContext(TodosContext)
    return (
        <ListItem>
            {isEditing ? <EditTodoForm id={id} task={task} toggle={toggle} /> :
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({type: 'UPDATE', id: id})}/>
           <ListItemText style={{textDecoration: completed? 'line-through': 'none'}}>
                {task}
           </ListItemText>
           <ListItemSecondaryAction>
               <IconButton onClick={() => dispatch({type: 'REMOVE', id:id})}>
                   <DeleteIcon/>
               </IconButton>
               <IconButton onClick={toggle}>
                   <EditIcon/>
               </IconButton>
           </ListItemSecondaryAction>
           </>
        }
        </ListItem>
    )
}

export default TodoItem;
