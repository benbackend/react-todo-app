function Filter(props) {

	const { filter, onFilterChange } = props;

	const options = {
		'all': 'All',
		'active': 'Active',
		'completed': 'Completed'
	};

	const listItems = [];

	Object.keys(options).map(
		(key) => {
			const value = options[key];
			listItems.push(
				<li key={key} onClick={() => onFilterChange(key)}>
					<a className={key === filter ? 'selected' : ''}>{value}</a>
				</li>
			)
		}
	)

	return (
		<ul className="filters list-unstyled clearfix">
			{listItems}
		</ul>
	);
}

export default Filter;
