import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getSmurphs } from './../actions/index';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(`CDM: fetchingSmurfs`);
    this.props.getSmurphs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <div> ... Loading</div>;
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(`Current state: ` + state.smurfs);
  return {
    smurfs: state.smurfs.smurfs,
    fetchingSmurfs: state.smurfs.fetchingSmurfs,
    error: state.smurfs.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurphs }
)(App);
