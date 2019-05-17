// import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from './../actions/index';

class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: '',
        age: 0,
        height: 0
      }
    };
  }

  addSmurf = e => {
    e.preventDefault();
    console.log(`----------add smurf fired`);
    this.props.addSmurfs(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: ''
      }
    });
  };

  handleInputChange = e => {
    e.persist();
    console.log(`--------------change handler invoked` + e.target.value);
    this.setState(prevState => ({
      ...this.state,
      newSmurf: {
        ...prevState.newSmurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="add-smurf">
      <br />
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.newSmurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.newSmurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.newSmurf.height}
            name="height"
          />
          <button onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

// AddSmurf.propTypes = {
//   addSmurfs: PropTypes.any
// }

export default connect(
  null,
  { addSmurfs }
)(AddSmurf);
