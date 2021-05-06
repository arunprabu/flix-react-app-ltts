import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

  state = {
    isSaved: false
  }

  handleContactSubmit = (event) => {
    console.log('Inside handleContactSubmit');
    event.preventDefault();
    console.log(this.nameEl.value);
    console.log(this.emailEl.value);
    console.log(this.phoneEl.value);

    const contactData = {
      name: this.nameEl.value,
      email: this.emailEl.value,
      phone: this.phoneEl.value
    }

    console.log(contactData);
    
    axios.post("http://localhost:3001/api/contacts/", contactData)
      .then( (res) => {
        console.log(res);
        if(res && res.status === 200){
          this.setState({
            isSaved: true
          })
        };
      } )
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over');
      });
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <form className="text-left" onSubmit={this.handleContactSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="text" className="form-control" 
              id="nameInput" placeholder="Enter Name"  
              ref={ (inputEl) => this.nameEl = inputEl }/>
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input type="email" className="form-control" 
              id="emailInput" placeholder="Enter Email" ref={ (inputEl) => this.emailEl = inputEl }/>
          </div>
          <div className="form-group">
            <label htmlFor="phoneInput">Phone</label>
            <input type="text" className="form-control" 
              id="phoneInput" placeholder="Enter Phone" ref={ (inputEl) => this.phoneEl = inputEl }/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {
          this.state.isSaved? 
            <div className="alert alert-success" role="alert">
              Saved Successfully!
            </div>
            :
            <div className="alert alert-danger" role="alert">
              Sorry! Some error occured! Try again later...
              TODO: Learn about react-toastify 
            </div>
        }
        
      </div>
    )
  }
}

export default ContactForm;