import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoUser.css'

const TodoUser = () => {

    const { user } = React.useContext(TodoContext)

    return (
        <h2 className="TodoUser">Tareas de : {user}</h2>
    );
}

export {TodoUser};