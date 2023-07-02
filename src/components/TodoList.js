import CheckItem from './CheckItem';
import Header from './Header';
import Footer from './Footer'

function TodoList({ title, items, addNew }) {
	return (
		<div className="todolist">
			<Header title={title} addNew={addNew} />
			<ul className="list-unstyled">
				{
					items.map(
						(item, id) => (
							<CheckItem placeholder={item.text} id={id} />
						)
					)
				}
			</ul>
			<Footer count={items.length} />
		</div>
	);
}

export default TodoList;
