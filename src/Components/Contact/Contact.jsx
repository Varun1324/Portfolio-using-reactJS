import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <section className="contact-section">
        <h2>Contact Me</h2>
        <form action="" id="myform">
            <div className="formGroup">
                <fieldset>
                    <legend>Name  </legend>
                    <input type="text" required/>
                </fieldset>
            </div>
            <div className="formGroup">
                <fieldset>
                    <legend>Email</legend>
                    <input type="email" required/>
                </fieldset>
            </div>
            <div className="formGroup">
                <fieldset>
                    <legend>Message</legend>
                    <textarea name="" id="" rows="15" cols="30" required></textarea>
                </fieldset>
            </div>
            <div className="formGroup">
                <input type="submit" id='submit-btn'/>
            </div>
        </form>
    </section>
  )
}

export default Contact