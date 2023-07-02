import React from 'react';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      key: props.key,
      value: props.value
    }
  }

  render() {
    return (
      <>
        <li className="ui-state-default" key={this.state.key}>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" id={this.state.key} checked={this.state.checked} />{this.state.value}
            </label>
          </div>
        </li>
      </>
    );
  }
}

export default CheckBox;
