import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Subscriber from '../components/Subscriber';

class SubscriberList extends Component {

  constructor() {
    super();
    this.state = {
      subscribers: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/contacts/')
      .then( ( res) => {
        console.log(res);
        if(res && res.status === 200){
          this.setState( {
            subscribers: res.data
          });
        }
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( ()=> {
        console.log('It is over!');
      });
  }


  handleViewDetails = (data) => {
    console.log(data);
    alert(data);
  }

  render() {
    console.log('============');
    console.log(this.state.subscribers);

    return (
      <div>

        { this.state.subscribers && this.state.subscribers.length > 0? 
          <div className="row">
            <Subscriber name={this.state.subscribers[0].name}
              phone={this.state.subscribers[0].phone}
              email={this.state.subscribers[0].email}
              details={this.handleViewDetails}
            />
            <Subscriber name={this.state.subscribers[1].name}
              phone={this.state.subscribers[1].phone}
              email={this.state.subscribers[1].email}
              details={this.handleViewDetails}
            />
            <Subscriber name={this.state.subscribers[2].name}
              phone={this.state.subscribers[2].phone}
              email={this.state.subscribers[2].email}
              details={this.handleViewDetails}
            />
          </div>
          :
          <div className="alert alert-danger">
            Sorry! Unable to load subscribers
          </div>
        }
        
      </div>
    )
  }
}

SubscriberList.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  details: PropTypes.func
}
export default SubscriberList;