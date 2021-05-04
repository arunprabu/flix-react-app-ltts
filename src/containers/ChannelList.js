import React, { Component } from 'react';

// Class comp should extend React Component
// only then, render method will be called automatically

/*
  we can have data within class comp
  we can have data in states object
  states - are mutatable but do not mutate directly
  mutate states using setState() -- only then, UI will show the update
  changing state will result in re-rendering 
  * setState method will merge the state data with other exisitng properties
  * Notable Problem of changing state -- will result in re-rendering cycle 
*/
class ChannelList extends Component {

  state = {
    tvChannelList: [
      { name: 'Star Sports', info: '#1 Sports Channel', imgUrl: 'https://via.placeholder.com/240x140' },
      { name: 'HBO', info: '#1 Movie Channel', imgUrl: 'https://via.placeholder.com/240x140' },
      { name: 'NatGeo', info: '#1 Infotainment Channel', imgUrl: 'https://via.placeholder.com/240x140' }
    ],
    provider: 'Tata Sky'
  }

  handleAddToFav = () => {
    console.log(this);

    this.setState( {
      tvChannelList: [
        { name: 'Star Sports [Added]', info: '#1 Sports Channel', imgUrl: 'https://via.placeholder.com/240x140' },
        { name: 'HBO', info: '#1 Movie Channel', imgUrl: 'https://via.placeholder.com/240x140' },
        { name: 'NatGeo', info: '#1 Infotainment Channel', imgUrl: 'https://via.placeholder.com/240x140' }
      ]
    }, () => {
      console.log(this.state.tvChannelList);
    });

  }

  render() {
    console.log('Inside Render');
    console.log(this.state.tvChannelList);
    return (
      <div>
        <p>Total Channels: {this.state.tvChannelList.length }</p>
        <div className="row">

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." src={ this.state.tvChannelList[0].imgUrl}/>
                <h5 className="card-title">{ this.state.tvChannelList[0].name}</h5>
                <p className="card-text">{ this.state.tvChannelList[0].info}</p>
                <button type="button" className="btn btn-primary float-right" onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." src={ this.state.tvChannelList[1].imgUrl}/>
                <h5 className="card-title">{ this.state.tvChannelList[1].name}</h5>
                <p className="card-text">{ this.state.tvChannelList[1].info}</p>
                <button type="button" className="btn btn-primary float-right">
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." src={ this.state.tvChannelList[2].imgUrl}/>
                <h5 className="card-title">{ this.state.tvChannelList[2].name}</h5>
                <p className="card-text">{ this.state.tvChannelList[2].info}</p>
                <button type="button" className="btn btn-primary float-right">
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ChannelList;