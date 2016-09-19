import React from 'react';
import { data } from '../data/todoListItems';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {data.map((item, idx) => (
          <li key={item.id}>{`${idx + 1}: ${item.name}`}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
