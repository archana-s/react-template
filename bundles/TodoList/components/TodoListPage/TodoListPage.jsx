import React from 'react';
import TodoList from '../TodoList/TodoList';

class TodoListPage extends React.Component {
  render() {
    return (
      <section>
        <h1>Same old todo list</h1>
        <TodoList />
      </section>
    );
  }
}

export default TodoListPage;
