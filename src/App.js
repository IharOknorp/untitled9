import React, { Component } from 'react';
import './App.css';
import {browserHistory} from 'react-router';
import {Router, Route} from 'react-router';
import Main from './components/main.js';
import LoginMy from './components/loginMy.js';
import Profile from './components/profile.js';
import News from './components/news.js';

function requireAuth(nextState, replace) {
    var isAdmin = localStorage.getItem('isAdmin');

    if(isAdmin == "false") {

        replace({
            pathname: '/login'
        })
    }
}

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route exact path="/" component={Main}/>
            <Route path="login" component={LoginMy}/>
            <Route path="profile" component={Profile} onEnter={requireAuth}/>
            <Route path="news" component={News}/>
        </Router>
    );
  }
}

export default App;
