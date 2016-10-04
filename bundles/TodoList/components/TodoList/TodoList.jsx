import React from 'react';
import data from '../../data/todoListItems';

class TodoList extends React.Component {
  render() {
    console.log(data);

    return (
      <ul>
        {data.map((item, idx) => (
          <li key={item.id}>{`${idx + 1}: ${item.name}`}</li>
        ))}
        <paper-button raised>Hello</paper-button>
        <search-box></search-box>
      </ul>
    );
  }
}

export default TodoList;
