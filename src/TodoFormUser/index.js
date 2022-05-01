import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoFormUser.css';

function TodoFormUser() {
  const [newUserValue, setNewUserValue] = React.useState('');
  const {
    guardarUsuario,
    setOpenModalUser,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewUserValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModalUser(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    guardarUsuario(newUserValue);
    setOpenModalUser(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>¿Cual es tu nombre?</label>
      <textarea
        value={newUserValue}
        onChange={onChange}
        placeholder="Pepiito Perez"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoFormUser }