import React, { Component } from 'react'

class Login extends Component {

    state= {
        isLogin :  false ,
    }

    handleLogin = () => {
        this.setState(prevState => ({isLogin:true}))
        let newIsLogin = localStorage.getItem('isLogin') 
        
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('isLogin',this.state.isLogin)
        
    }
    
    render() {
        return (
            
                <div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button onClick={this.handleLogin} className="btn waves-effect waves-light" >{this.state.isLogin ? ("LogIn") : ("LogOut")}
                    </button>
                </div>
            
        )
    }
}

export default Login
