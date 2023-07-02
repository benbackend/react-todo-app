import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../style/index.css';
import Items from '../data/items.json';

import TodoList from './TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: Items };
  }

  render() {
    let title = 'Things to do';
    return (
      <div className="container">
        <div className="row">
          <TodoList title={title} items={this.state.items} addNew={this.addNew.bind(this)} />
        </div>
      </div>
    );
  }

  addNew(text) {
    let newItem = { text: text }

    let newList = this.state.items.concat(newItem);
    this.setState({
      items: newList
    });
  }
}

export default App;
