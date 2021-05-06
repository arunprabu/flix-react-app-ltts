import React from 'react'

const Subscriber = (props) => {

  console.log(props);

  return (
    <div className="col-md-3">
      <div className="card bg-light mb-3">
        <div className="card-header">{props.name}</div>
        <div className="card-body">
          <h5 className="card-title">{props.phone}</h5>
          <p className="card-text">{props.email}</p>
          <button className="btn btn-primary" onClick={props.details.bind(this, props.email)}>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Subscriber;
