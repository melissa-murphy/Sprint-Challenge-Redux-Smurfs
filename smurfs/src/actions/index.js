/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: err
      });
    });
};

export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';
export const addSmurfs = smurf => dispatch => {
  dispatch({ type: ADD_SMURFS });
  console.log('ADD_SMURFS in progress');
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      console(res.data);
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_SMURFS_FAILURE,
        payload: err
      });
    });
};

export const REMOVE_SMURFS = 'REMOVE_SMURFS';
export const REMOVE_SMURFS_SUCCESS = 'REMOVE_SMURFS_SUCCESS';
export const REMOVE_SMURFS_FAILURE = 'REMOVE_SMURFS_FAILURE';
export const removeSmurfs = id => dispatch => {
  dispatch({ type: REMOVE_SMURFS });
  console.log('ADD_SMURFS in progress');
  axios
    .post(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console(res.data);
      dispatch({ type: REMOVE_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REMOVE_SMURFS_FAILURE,
        payload: err
      });
    });
};
