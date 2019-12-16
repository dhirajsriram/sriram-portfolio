import React, { useState } from "react";
import Block from "../block/block";
import Fade from "react-reveal/Fade";
import "./contact.scss";

function Contact() {
  let myFormRef;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  function submitInfo(e) {
    setSent(false);
    setSending(true);
    e.preventDefault();
    var service_id = "default_service";
    var template_id = "template_FzPhxISm";
    myFormRef.reset();
    window.emailjs.sendForm(service_id, template_id, e.target).then(
      () => {
        setSent(true);
        setSending(false);
      },
      function(err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      }
    );
  }
  return (
    <Block>
      <div className="pt-5 contact" id="contact">
        <h2 className="subheading">CONTACT</h2>
        <Fade left>
          <hr className="subheading-underline"></hr>
        </Fade>
        <div className="contact-container mt-5 mx-auto">
          <form
            ref={el => (myFormRef = el)}
            id="contact-form"
            name="contact"
            method="post"
            onSubmit={submitInfo}
          >
            <div className="messages" />
            <div className="controls">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      data-error="Name is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_Company"
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder="Company "
                      required="required"
                      data-error="Company is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email "
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="form_Phone"
                      type="number"
                      name="Phone"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required="required"
                      data-error="Please add a subject"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder="Message for me "
                      rows="4"
                      required="required"
                      data-error="Please, leave a message."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12 button-block">
                  <div>
                    {!sending ? <button
                      type="submit"
                      className="btn btn-success btn-contact-submit"
                    >
                      SEND
                    </button>:<div className="spinner-container">
                    <div className="spinner-border"></div></div>}
                  </div>
                  <div className="find-me">
                    <a href="https://www.linkedin.com/in/sriram-m-s-69b7b62a/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:mssriram59@gmail.com">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
                {sent && <div className="get-back"><i className="fas fa-check-circle"></i>Message Sent</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Block>
  );
}

export default Contact;
