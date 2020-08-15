import React, { Component } from 'react'
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'

import Home from './Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Community from './components/Community'
import Login from './components/Login'
import MovieDetail from './components/MovieDetail'

class MyApp extends Component {
    render() {
        return (
        <Router>
           
            <div className="App-container">
                <Nav />
                <Route exact path="/home" component={Home}/>
                <Route  path="/about" component={About}/> 
                <Route  path="/contact" component={Contact}/>
                <Route  path="/community" component={Community}/>
                <Route  path="/login" component={Login}/>
                <Route exact path="/home/:id" component={MovieDetail}/>
            </div>
            
        </Router>
        )
    }
}

export default MyApp ;
