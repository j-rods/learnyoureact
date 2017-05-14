import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    return (
      <div className='todoBox'>
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        I am a TodoList.
      </div>
    );
  }
}

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    );
  }
}

//Using react components
//build apps using react.js by combining several components
//these use html tags together with jsx notation

//to render a react component, create a local variable that starts
//with uppercase letter

//react js uses upper vs lower case to distinguish between
//local component classes and HTML tags

