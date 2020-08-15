import React from 'react'

function Community(props) {

    setTimeout(() => {
       props.history.push('/login')
    }, 2000);

    return (
        <div>
           <h1>my community</h1> 
        </div>
    )
}

export default Community
