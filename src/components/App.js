import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../style/index.css';
import Items from '../data/items.json';

import TodoList from './TodoList';
import { createNew } from '../services/todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'active',
      items: Items
    };
  }

  render() {
    let title = 'Things to do';
    return (
      <div className="container">
        <div className="row">
          <TodoList title={title} addNew={this.addNew} onFilterChange={this.handleFilterChange} {...this.state} />
        </div>
      </div>
    );
  }

  addNew = (text) => {
    const newList = this.state.items.concat(createNew(text))
    this.setState({ items: newList })
  }

  handleFilterChange = (state) => {
    this.setState({
      filter: state
    });
  }

}

export default App;
