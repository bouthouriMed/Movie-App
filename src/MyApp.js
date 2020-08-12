import React, { Component } from 'react'
import {BrowserRouter as Router ,Route} from 'react-router-dom'

import Home from './Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Community from './components/Community'
import Login from './components/Login'

class MyApp extends Component {
    render() {
        return (
        <Router>
         <div className="App-container">
            <Nav />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/> 
            <Route path="/contact" component={Contact}/>
            <Route path="/community" component={Community}/>
            <Route path="/login" component={Login}/>
            

        </div>
        </Router>
        )
    }
}

export default MyApp ;
