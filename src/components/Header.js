import InputBox from './InputBox';

function Header({ title, addNew }) {
	return (
		<header>
			<h1>{title.toUpperCase()}</h1>
			<InputBox placeholder="Add New" addNew={addNew} />
		</header>

	);
}

export default Header;
