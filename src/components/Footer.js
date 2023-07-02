import Filter from "./Filter";

function Footer(props) {
	const { items, filter, onFilterChange } = props;
	const count = items.length;

	return (
		<div className="todo-footer clearfix">
			<div className="pull-left">
			<strong>
				<span className="count-todos">{count}</span>
			</strong>
			{' items left'}
			</div>
			<div className="pull-right">
				<Filter filter={filter} onFilterChange={onFilterChange} />
			</div>
		</div>
	);
}

export default Footer;
