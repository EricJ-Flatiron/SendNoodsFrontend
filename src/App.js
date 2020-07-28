import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login.js';
import SignUp from './components/auth/SignUp.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js'
import Logout from './components/auth/Logout.js';
import Order from './components/Order.js';
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe("pk_test_51H9voND7h6J7ftZvWesW0Ak9dpg5Q6sKyjwG6KgHgkmToaqJQC7QcS25pr9PRGekpAwIgKIfliVBw71q4IsCApyw00KxLMKKCD");

class App extends React.Component {

  state = {
    isLoading: true,
    token: localStorage.token,
    user: JSON.parse(localStorage.getItem("user"))
  }

  componentDidMount(){
    this.setState({
      isLoading: false
    })
  }

  handleStateChanges = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.isLoading
        ? <h4> Hot Noods Incoming... </h4>
        :<Router>

          <Route exact path="/profile" component={() => 
            this.state.token ?
            <Profile user={this.state.user} token={this.state.token}/> 
            : <Redirect to='/login'/>}> 
          </Route>

          <Route exact path="/" component={() => 
            <Home user={this.state.user} token={this.state.token} handleStateChange={this.handleStateChanges}/>}>
          </Route>

          <Route exact path="/home" component={() => 
            <Home user={this.state.user} token={this.state.token} handleStateChange={this.handleStateChanges}/>}>
          </Route>

          <Route exact path="/signup" component={() =>
            this.state.token !== undefined ?
            <Home user={this.state.user} token={this.state.token} handleStateChange={this.handleStateChanges}/>
            : <SignUp handleStateChange={this.handleStateChanges}/>}>
          </Route>

          <Route exact path="/login" component={() => 
            this.state.token !== undefined ?
            <Order user={this.state.user} token={this.state.token} handleStateChange={this.handleStateChanges}/>
            : <Login handleStateChange={this.handleStateChanges}/>}>
          </Route>

          <Route exact path="/order" component={() => 
            this.state.token !== undefined ?
            <Home user={this.state.user} token={this.state.token} handleStateChange={this.handleStateChanges}/>
            : <Login handleStateChange={this.handleStateChanges}/>}>
          </Route>
    
          <Route exact path="/logout" component={() => 
            <Logout handleStateChange={this.handleStateChanges}/>}>
          </Route>

        </Router>
        }  
      </div>
    );
  }
}

export default App;
