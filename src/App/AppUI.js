import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoFormUser } from '../TodoFormUser'
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { CreateUserButton } from '../CreateUserButton';
import { Modal } from '../Modal';
import { ModalUser } from '../ModalUser';
import { TodoUser } from '../TodoUser'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openModalUser,
    setOpenModalUser,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoUser />
      <TodoCounter />
      <TodoSearch />

      <h3>Lista de To Do</h3>

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.length > 0 ? searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )) : <h2> No hay lista de To Do asociada a la busqueda</h2>}


      </TodoList>

      {!!openModalUser && (
        <ModalUser>
          <TodoFormUser />
        </ModalUser>
      )}

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateUserButton
        setOpenModalUser={setOpenModalUser}
      />

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>


  );
}

export { AppUI };
