import React from 'react';
import { KEY_RETURN } from 'keycode-js';

class InputBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || ''
		};
	}

	clear() {
		this.setState({ value: '' });
	}

	handleKeyUp = (e) => {
		const { addNew } = this.props;
		const text = this.state.value.trim();
		if (e.which === KEY_RETURN && text) {
			addNew(text);
			this.clear();
		}
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value })
	}

	render() {
		return (
			<>
			<input
				placeholder="Add New"
				className="form-control add-todo"
				type="text"
				onChange={this.handleChange}
				onKeyUp={this.handleKeyUp}
				value={this.value} />

			</>
		);
	}
}

export default InputBox;

