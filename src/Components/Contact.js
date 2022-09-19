import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com';


class Contact extends Component {

  constructor()
  {
    super();
    this.state={
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }


  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      value={this.state.name}
                      onChange={(e)=>{
                        this.setState({name: e.target.value});
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      value={this.state.email}
                      onChange={(e)=>{
                        this.setState({email: e.target.value});
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      value={this.state.subject}
                      onChange={(e)=>{
                        this.setState({subject: e.target.value});
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      value={this.state.message}
                      onChange={(e)=>{
                        this.setState({message: e.target.value});
                      }}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" onClick={(e)=>{
                      emailjs.send('service_xrxfdko', 'template_siy0bnd', {
                        subject: this.state.subject,
                        message: this.state.message,
                        name: this.state.name,
                        email : this.state.email
                      }, 'Tpa9ljF52pN03oNpg')
                      .then((result) => {
                         alert("Email sent");
                         this.setState({
                          subject:"",
                          message:"",
                          name:"",
                          email:""
                         }) //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
                      }, (error) => {
                          console.log(error.text);
                      });
                    }}>Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
