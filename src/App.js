import React from 'react';

/**
 * Todo list array
 */
const todoList = [
  {
    id: 1,
    title: "First Assignment" 
  },
  {
    id: 2,
    title: "Second Assignment" 
  },
  {
    id: 3,
    title: "Third Assignment" 
  }
];

/**
 * App component
 */
function App() {
  /**
   * map array inside the <li>
   */
  const listItems = todoList.map(function(item){
    return (
      <li key={item.id}>
        {item.title}
      </li>
    );
  })
  
  /**
   * Return result
   */
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
