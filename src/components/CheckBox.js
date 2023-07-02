import React from 'react';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.data.completed,
      key: this.props.data.id,
      value: this.props.data.text,
    }
  }

  handleChange = (e) => {
    const { checked } = e.target;

    this.setState({ checked: checked });
    this.props.onChange(checked);
  }

  render() {
    return (
      <>
        <li className="ui-state-default" key={this.state.key}>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" id={this.state.key} checked={this.state.checked} onChange={this.handleChange} />{this.state.value}
            </label>
          </div>
        </li>
      </>
    );
  }
}

export default CheckBox;
