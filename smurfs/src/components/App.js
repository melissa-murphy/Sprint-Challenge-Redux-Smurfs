import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getSmurfs } from './../actions/index';
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
// import smurfReducer from './../reducers/smurfReducer';
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
    this.props.getSmurfs();
  }

  render() {
    // if (this.props.fetchingSmurfs) {
    //   return <div> ... Loading</div>;
    // }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <SmurfList smurfs={this.props.smurfs} />
        <AddSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(`Current state: ` + state.smurfs);
  return {
    smurfs: state.smurfReducer.smurfs,
    fetchingSmurfs: state.smurfReducer.fetchingSmurfs,
    error: state.smurfReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
