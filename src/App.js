import './App.css';  // import 

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Program from './components/Program';
import ChannelList from './containers/ChannelList';
import TrendingShows from './containers/TrendingShows';
import MyProfile from './containers/MyProfile';
import Subscription from './components/Subscription';
import LifeCycleDemo from './containers/LifeCycleDemo';
import ContactForm from './containers/ContactForm';
import SubscriberList from './containers/SubscriberList';
import WithLastLogin from './hoc/WithLastLogin';

// ideal comp for your layout
// fn defn
function App() {

  // comp should mandatorily return JSX
  return (
    <div className="text-center">
      <Header></Header>
      <div className="mt-5">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to My App with TV Programs!</h1>
            <p>
              lorem ipsum
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="/" role="button">
                Learn more »
              </a>
            </p>
          </div>
        </div>

        <div className='container'>
          <h2 className="greyText">Featured Programs | Props Demo</h2>
          <div className="row">
            <div className="col-12">
              <Program name="Man Vs Wild"
                time="8 PM"
                category="Infotainment">
                A Wild Adventure program hosted by Bear Grylls
              </Program>

              <Program name="Planet Earth"
                time="9 PM"
                category="Infotainment">
                A Show hosted by David Attenborough
              </Program>

              <Program name="IPL Match - CSK Vs RCB"
                  time="7.30 PM"
                  category="Sports">
                IPL Cricket 2021
              </Program>
            </div>
          </div>
        </div>
        
        <hr /> 
        <div className='container'>
          <h2>Channel List | States Demo</h2>
          <ChannelList />
        </div>

        <hr/>
        <div className='container'>
          <h2>Trending Shows | Conditional Rendering, Lists and Keys Demo</h2>
          <TrendingShows />
        </div>

        <hr/>
        <div className='container'>
          <h2>Update Profile | Two Way Binding Demo</h2>
          <MyProfile />
        </div>

        <hr/>
        <div className='container'>
          <h2>Subscription | Styling Demo</h2>
          <Subscription />
        </div>
        
        <hr/>
        <div className='container'>
          <h2>Lifecycle Hooks Demo</h2>
          <LifeCycleDemo title="Class comp and Lifecycle"/>
        </div>

        <hr/>
        <div className='container'>
          <h2>Contact Us | React Forms and Ref's Demo</h2>
          <ContactForm />
        </div>

        <hr/>
        <div className='container'>
          <h2>SubscriberList | Parent to Child Comp Communication Demo</h2>
          <SubscriberList />
        </div>

        <hr/>
        <div className='container'>
          <h2>Last Login | HOC Demo</h2>
          <WithLastLogin>
            <p>Last Login: 3/May/2021</p>
            <p>Updated at: 2 PM Today</p>
          </WithLastLogin>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App; // export the comp
