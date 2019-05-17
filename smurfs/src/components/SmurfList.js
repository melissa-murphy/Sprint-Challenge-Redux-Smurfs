import React from 'react';
// import { Card } from 'reactstrap';

function SmurfList(props) {
  return (
    <div className="smurf info">
      {props.smurfs.map(smurf => (
        <div className="smurf-card" key={smurf.id}>
        <h4>{smurf.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default SmurfList;
