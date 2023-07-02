import CheckBox from './CheckBox';
import Header from './Header';
import Footer from './Footer';

import React from 'react';

import { applyFilter, FILTER_ALL } from '../services/filter';
import { createNew, updateStatus } from '../services/todo';
import items from '../data/items.json';

// function TodoList({ title, items, addNew, filter, onFilterChange, changeStatus }) {
// 	const filteredItems = applyFilter(items, filter);
// 	console.log(filteredItems);
// 	const count = filteredItems.length
// 	return (
// 		<div className="todolist">
// 			<Header title={title} addNew={addNew} />
// 			{
// 				filteredItems.length > 0
// 					? (
// 						<ul className="list-unstyled">
// 							{
// 								filteredItems.map(
// 									(item) => (
// 										<>
// 											<CheckBox data={item} onChange={(checked) => changeStatus(item.id, checked)} />
// 										</>
// 									)
// 								)
// 							}
// 						</ul>
// 					)
// 					: (<p className="alert alert-info">There are no items.</p>)

// 			}


// 			<Footer {...{ count, filter, onFilterChange }} />
// 		</div>
// 	);
// }

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: FILTER_ALL,
			items: items,
			title: 'Things To Do',
		}
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

	changeStatus = (itemId, completed) => {
		const updatedList = updateStatus(this.state.items, itemId, completed);
		this.setState({ items: updatedList });
	}

	render() {
		const filteredItems = applyFilter(this.state.items, this.state.filter)
		console.log(filteredItems);

		var unorderedList = [];
		filteredItems.map(
			(item) => (
				unorderedList.push(
					<>
						<CheckBox data={item} onChange={(checked) => this.changeStatus(item.id, checked)} />
					</>
				)
			)
		)

		return (
			<div className="todolist">
				<Header title={this.state.title} addNew={this.addNew} />
				{
					unorderedList.length > 0
					? (
						<ul className="list-unstyled">
								{unorderedList}
						</ul>
					)
					: (<p className="alert alert-info">There are no items.</p>)

			}


				<Footer onFilterChange={this.handleFilterChange} {...this.state} />
		</div>
		);
	}
}

// function applyFilter(items, fil) {

// 	var filtered;
// 	switch (fil) {
// 		case FILTER_ALL:
// 			return items;

// 		case FILTER_COMPLETED:
// 			filtered = items.filter(item => item.completed === true);
// 			// console.log(filtered);
// 			return filtered;

// 		case FILTER_ACTIVE:
// 			filtered = items.filter(item => item.completed === false);
// 			// console.log(filtered);
// 			return filtered;
// 	}

// }

export default TodoList;
