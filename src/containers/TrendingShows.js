import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor(){
    super(); // must call super to get 'this' keyword
    
    this.state = {
      trendingShowsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false },
        { id: 2, name: 'IPL Cricket', host: 'Sourva Ganguly', isInWatchlist: false },
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchlist: false }
      ]
    }
  }

  handleAddToWatchlist(index){
    console.log('handleAddToWatchlist');
    console.log(this);
    console.log(index);

    // working with state immutably
    let showList = [ ...this.state.trendingShowsList ]; // Creating a duplicate
    showList[index].isInWatchlist = !showList[index].isInWatchlist; // toggling isInWatchlist
    this.setState( {
      trendingShowsList: showList
    });
  }

  render() {
    
    // ideal place for looping -- lists
    // ideal place for comp specific transformations in JSX
    let showList = null;
    if( this.state.trendingShowsList && this.state.trendingShowsList.length > 0 ) {

      showList = this.state.trendingShowsList.map( ( show, index ) => {
        console.log(show);
        return( 
          <li className="list-group-item" key={show.id}>
            #{show.id} {show.name} | Host: {show.host}
            <button className="btn btn-success float-right" 
              onClick={this.handleAddToWatchlist.bind(this, index)}>
              { show.isInWatchlist?  'In Watchlist': 'Add to Watchlist' }
            </button>
          </li>
        )
      });
    }

    return (
      <div className="text-left">
        
        <ul className="list-group">
          { this.state.trendingShowsList && this.state.trendingShowsList.length > 0? 
            showList: 
            <div className="alert alert-warning">
              No Shows Found!
            </div>
          }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;