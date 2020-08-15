import React, { useState,useEffect } from 'react'

function Login () {

    const [isLogin,setIsLogin] = useState(false)

    const handleLogin = () => {
        setIsLogin(!isLogin)
    }

    useEffect(() => {
      
        console.log(isLogin)

    }, [isLogin])



  
    
    
     
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
                    <button onClick={handleLogin} className="btn waves-effect waves-light" >{isLogin ? ("LogOut") : ("LogIn")}
                    </button>
                  
                </div>

        )
            
        
    
}

export default Login
