import React from 'react';
// import { Card } from 'reactstrap';
// import { removeSmurfs } from './../actions/index';

function SmurfList(props) {
  return (
    <div className="smurf info">
      {props.smurfs.map(smurf => (
        <div className="smurf-card" key={smurf.id}>
        <h4>{smurf.name}</h4>
        <p>{smurf.age}</p>
        <p>{smurf.height}</p>
        <button onClick={() => props.removeSmurfs(smurf.id)}>toss that smurf</button>
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
