import React, {Component} from 'react';
import '../components/ContactForm.css';
import fire from "../fire";
import axios from 'axios'



class ContactForm extends Component{
  constructor(props) {
      super(props);
      this.state = {
        contacts: {
          data: []
        },
        newFirstName: "",
        newLastName: "",
        newEmail: "",
        newSubject: "",
        newMessage: ""

      }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onFirstNameChange = this.onFirstNameChange.bind(this)
    this.onLastNameChange = this.onLastNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onSubjectChange = this.onSubjectChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    };

    componentWillMount() {
      let contactRef = fire.database().ref('contacts').orderByKey().limitToLast(100);
      contactRef.on('child_added', snapshot => {
        let contact = { text: snapshot.val(), id: snapshot.key };
        this.setState({ contacts: [contact].concat(this.state.contacts) });
      })
    }


  onFormSubmit(event) {
    event.preventDefault()
    fire.database().ref('contacts').push({
      FirstName : this.state.newFirstName,
      LastName : this.state.newLastName,
      Email : this.state.newEmail,
      Subject : this.state.newSubject,
      Message : this.state.newMessage
    });
    this.setState({
      newFirstName: "",
      newLastName: "",
      newEmail: "",
      newSubject: "",
      newMessage: ""
    });

    let contactFormInfo = {
      firstName: this.state.newFirstName,
      lastName: this.state.newLastName,
      email: this.state.newEmail,
      subject: this.state.newSubject,
      message: this.state.newMessage
    }
    axios.post('https://acafeboise.herokuapp.com/contact', contactFormInfo)
    .then(response => { 
      console.log(response)
      this.props.history.push('/contact');
})
    .catch(error => {
    console.log(error.response)
    })
  }

  onFirstNameChange(event){
    this.setState({
      contacts : this.state.contact,
      newFirstName : event.target.value,
      newLastName : this.state.newLastName,
      newEmail : this.state.newEmail,
      newSubject : this.state.newSubject,
      newMessage : this.state.newMessage
    })

  }

    onLastNameChange(event){
    this.setState({
      contacts : this.state.contact,
      newFirstName : this.state.newFirstName,
      newLastName : event.target.value,
      newEmail : this.state.newEmail,
      newSubject : this.state.newSubject,
      newMessage : this.state.newMessage
    })

  }

  onEmailChange(event){
    this.setState({
      contacts : this.state.contact,
      newFirstName : this.state.newFirstName,
      newLastName : this.state.newLastName,
      newEmail : event.target.value,
      newSubject : this.state.newSubject,
      newMessage : this.state.newMessage
    })

  }

  onSubjectChange(event) {
    this.setState({
      contacts : this.state.contact,
      newFirstName : this.state.newFirstName,
      newLastName : this.state.newLastName,
      newEmail : this.state.newEmail,
      newSubject : event.target.value,
      newMessage : this.state.newMessage
    });
  }

  onMessageChange(event){
    this.setState({
      contacts : this.state.contact,
      newFirstName : this.state.newFirstName,
      newLastName : this.state.newLastName,
      newEmail : this.state.newEmail,
      newSubject : this.state.newSubject,
      newMessage : event.target.value
    })
  }
  render() {
    return (
        <div >
            <h3 id="contact">CONTACT</h3>
            <p>Drop us a line...</p>
            <section id="contact-form">
                <form onSubmit={this.onFormSubmit}>
                  <div className="row">
                    <div className="six columns">
                      <label htmlFor="firstNameInput">First Name
                      <input 
                      name = "firstName"
                      className="u-full-width" 
                      type="text" 
                      placeholder="ex. John" 
                      id="firstNameInput"
                      onChange={this.onFirstNameChange}
                      value={this.state.newFirstName} />
                      </label>
                    </div>
                    <div className="six columns">
                      <label htmlFor="lastNameInput">Last Name
                      <input 
                      name = "lastName"
                      className="u-full-width" 
                      type="text" 
                      placeholder="ex. Smith" 
                      id="lastNameInput"
                      onChange={this.onLastNameChange}
                      value={this.state.newLastName} />
                      </label>
                    </div>
                    <div >
                      <label htmlFor="emailInput">Your email
                      <input 
                      name = "email"
                      className="u-full-width" 
                      type="email" 
                      placeholder="ex. yourname@mailbox.com" 
                      id="emailInput"
                      onChange={this.onEmailChange}  
                      value={this.state.newEmail} />
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
                      id="recipientInput"
                      value={this.state.newSubject} 
                      onChange={this.onSubjectChange} />
                      </label>
                    </div>
                  </div>
                  <label htmlFor="message">Message
                  <textarea 
                  name= "message"
                  className="u-full-width" 
                  placeholder="ex. Hi there, we visited your restaurant..." 
                  id="exampleMessage"
                  onChange={this.onMessageChange} 
                  value={this.state.newMessage}>
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