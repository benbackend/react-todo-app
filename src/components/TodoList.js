import CheckBox from './CheckBox';
import Header from './Header';
import Footer from './Footer';

const FILTER_ALL = 'all'

function TodoList({ title, items, addNew, filter, onFilterChange }) {
	const filteredItems = applyFilter(items, filter);
	const count = filteredItems.length
	return (
		<div className="todolist">
			<Header title={title} addNew={addNew} />
			{
				filteredItems.length > 0
					? (
						<ul className="list-unstyled">
							{
								filteredItems.map(
									(item, id) => (
										<CheckBox value={item.text} id={id} completed={item.completed} />
									)
								)
							}
						</ul>
					)
					: (<p className="alert alert-info">There are no items.</p>)

			}


			<Footer {...{ count, filter, onFilterChange }} />
		</div>
	);
}

function applyFilter(items, filter) {
	const completed = {
		completed: true,
		active: false
	};
	switch (filter) {
		case FILTER_ALL:
			return items;

		default:
			return items.filter((item) => { return item.completed === completed[filter] })
	}

}

export default TodoList;
