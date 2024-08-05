import React from "react";
import { Link } from "react-router-dom";
import '../css/contact.css';

function Contact() {
 

  const formStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    marginLeft:'20px',
    justifyContent: 'space-between',
  };

  

  
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <div className="maincontactdiv">
     
     <Link to="/" style={linkStyle}>
        <h1>B.Planet</h1>
      </Link>
      <div className="contactdiv">
        
        <div className="actform">
          <div className="msg">
            <h2>Stay Updated</h2>
            <p>Need to get in touch with us?</p>
            <p><a href="https://facebook.com">Facebook</a></p>
            <p><a href="https://instagram.com">Instagram</a></p>
          </div>
          <div style={formStyle}>
            <form className="cform">
              <input type="text" placeholder="Name" className="textf" />
              <input type="email" placeholder="Email" className="textf"/>
              <textarea rows="5" placeholder="Message" className="textf"/>
              <button type="submit" className="but">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
