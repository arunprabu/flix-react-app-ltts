import React from 'react';

const Program = (props) => {
  /* What are props? 
    * Objects 
    * are read-only
    * Using props we can receive data from parent comp to child comp 
    * recommended way to receive is... in the name of 'props'
    * props can have children property also
  */
  console.log(props);

  // Let's define the event handler
  const handleWatchIt = (event) => {
   
    console.log(event);
    // TODO: change the label to 'Watching...' and disable the button
  }

  return (
    <div className="card text-left mb-3">
      <div className="card-header">
        Featured 
        <span className="badge badge-warning float-right">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button type="button" className="btn btn-primary" onClick={handleWatchIt}>Watch it</button>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
