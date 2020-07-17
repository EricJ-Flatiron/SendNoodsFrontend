import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login.js';
import SignUp from './components/auth/SignUp.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js'

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
        ? <h4> Spicy Noodles Incoming... </h4>
        :<Router>

          <Route exact path="/profile" component={() => 
            this.state.token ?
            <Profile
              user={this.state.user}
            /> : <Redirect to='/login'/>}> 
          </Route>

          <Route exact path="/" component={() => 
            <Home/>}>
          </Route>

          <Route exact path="/home" component={() => 
            <Home/>}>
          </Route>

          <Route exact path="/signup" component={() =>
            <SignUp/>}>
          </Route>

          <Route exact path="/login" component={() => 
            <Login handleStateChange={this.handleStateChanges}>

            </Login>}>
          </Route>
    
    
    
    
        </Router>
        }  
      </div>
    );
  }
}

export default App;
