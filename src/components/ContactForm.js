import React, {Component} from 'react';
import '../components/ContactForm.css';



class ContactForm extends Component{
  render() {
    return (
        <div >
            <h3 id="contact">CONTACT</h3>
            <p>Drop us a line...</p>
            <section id="contact-form">
                <form>
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="firstNameInput">First Name
                      <input 
                      name = "firstName"
                      className="u-full-width" 
                      type="text" 
                      placeholder="ex. John" 
                      id="firstNameInput" />
                      </label>
                    </div>
                    <div className="six columns">
                      <label htmlFor="lastNameInput">Last Name
                      <input 
                      name = "lastName"
                      className="u-full-width" 
                      type="text" 
                      placeholder="ex. Smith" 
                      id="lastNameInput" />
                      </label>
                    </div>
                    <div >
                      <label htmlFor="emailInput">Your email
                      <input 
                      name = "email"
                      className="u-full-width" 
                      type="email" 
                      placeholder="ex. yourname@mailbox.com" 
                      id="emailInput" />
                      </label>
                    </div>
                    <div >
                      <label htmlFor="recipientInput">Subject
                      <br />
                      <input 
                      name="subject"
                      className="u-full-width" 
                      type='text'
                      placeholder='ex. Admiration'
                      id="recipientInput" />
                      </label>
                    </div>
                  </div>
                  <label htmlFor="message">Message
                  <textarea 
                  name= "message"
                  className="u-full-width" 
                  placeholder="ex. Hi there, we visited your restaurant..." 
                  id="exampleMessage">
                  </textarea>
                  </label>
                  <input id="button" type="submit" value="Submit"/>
                </form>
            </section>
        </div>
    );
  }
}

export default ContactForm;