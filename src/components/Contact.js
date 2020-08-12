import React from 'react'

function Contact() {
    return (
    <div className="row">
        <br/>  <br/>  <br/>
    <form className="col s12">
      <div className="row">
            <div className="input-field col s6">
                <input  id="first_name" type="text" className="validate"/>
                <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"/>
                <label htmlFor="last_name">Last Name</label>
            </div>
      </div>
      <div className="row">
            <div className="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
                <label htmlFor="disabled">Disabled</label>
            </div>
      </div>
      <div className="row">
            <div className="input-field col s12">
                <input id="password" type="password" className="validate"/>
                <label htmlFor="password">Password</label>
            </div>
      </div>
      <div className="row">
            <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right"></i></button>     
      </div>
      <div className="row">
            <div className="col s12">
            Or simply put your E-mail here and we will contact you : 
                <div className="input-field inline">
                    <input id="email_inline" type="email" className="validate"/>
                    <label htmlFor="email_inline">Email</label>
                    <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Send
                <i className="material-icons right"></i> </button>
            </div>
      </div>
    </form>
  </div>
    )
}

export default Contact
