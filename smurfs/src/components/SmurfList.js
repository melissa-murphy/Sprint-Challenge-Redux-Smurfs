import React from 'react';
import { Card } from 'reactstrap';

function SmurfList(props) {
  return (
    <div className="smurf info">
      {props.smurfs.map(smurf => (
        <Card className="smurf-card" key={smurf.id}>
          <h4>{smurf.name}</h4>
        </Card>
      ))}
    </div>
  );
}

export default SmurfList;
