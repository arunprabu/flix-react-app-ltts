import React, { Component } from 'react'

class LifeCycleDemo extends Component {

  // lifecycle hooks are available in class comp 
  constructor(props) { // props can be received here
    super(props); 
    console.log('----------------1. Inside Constructor-------------------');
    this.state = {
      featureName: 'Lifecycle Hook',
      userList: []
    };
  }

  static getDerivedStateFromProps(props, state){ // mandatory arguments
    // can't have 'this' keyword
    // you can't access any other methods
    // the only way to update state is by returning an object 
    console.log('----------------2. Inside getDerivedStateFromProps---------------');
    console.log(state);
   
    return state;
  }

  componentDidMount(){ // lifecycle hook
    // called after render method
    // called when the comp comes into the view
    // ideal place for you to send ajax calls

    // upon the ajax call's resp -- change the state
    console.log('----------------4. Inside componentDidMount------------------');

    setTimeout( ()=> {
      this.setState({
        userList: [
          { id: 1, name: 'Arun'}
        ]
      }); // Will Call render method again
    }, 3000);
  }

  componentWillUnmount(){
    // called when comp goes out of the view
    // ideal place for you to clear intervals, clear timeouts, clear unnecessary data
    
    console.log('----------------7. Inside componentWillUnmount-----------------');
  }

  componentDidUpdate(){
    // called only after the update in comp occurs. 
    // not called after initial render
    console.log('--------------- 6. Inside componentDidUpdate-----------------');
  }

  shouldComponentUpdate(){
    // ideal lifecycle hook to check whether re-rendeing is required or not
    // it should return boolean
    // it true is returned render method would be called
    // it false is returned render method would not be called
    console.log('--------------- 5. Inside shouldComponentUpdate-----------------');
    return true;
  }

  render() {
    // Don't ever change the state in render method
    // It will re-render infinitely 
    console.log('----------------3. Inside Render-------------------');

    return (
      <div>
        <p>{this.state.featureName}</p>
        <p>{this.props.title}</p>

        { this.state.userList && this.state.userList.length > 0? 
          <div>
            <p>{this.state.userList[0].name}</p>
            <a href="https://reactjs.org/docs/state-and-lifecycle.html">Lear more about Lifecycle Hooks here</a>
          </div>
          :
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
        
      </div>
    )
  }
}

export default LifeCycleDemo;
