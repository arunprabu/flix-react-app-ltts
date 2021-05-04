import React, { Component } from 'react'

class MyProfile extends Component {

  state = {
    profileName: 'Arun',
    accountCreated: '4/5/2021'
  }

  handleProfileNameChange = (event) => {
    console.log('Typed :' + event.target.value);
    this.setState( {
      profileName: event.target.value
    });
  }

  render() {
    return (
      <div>
        { 
          /* the input field w/o onChange will show error in console. it will be immutable.
          if you want to edit the field have onChange
          */
        }
        <input type="text" placeholder="Enter Profile Name" value={this.state.profileName}
        onChange={this.handleProfileNameChange}/>
        <p>Profile Name: {this.state.profileName}</p>
        <p>Account Created: {this.state.accountCreated}</p>

        {/* The following will work and it would be mutable */}
        <input type="text" defaultValue="Testing" />

      </div>
    )
  }
}

export default MyProfile;