import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../style/index.css';

import TodoList from './TodoList';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoList />
        </div>
      </div>
    );
  }

}

export default App;
