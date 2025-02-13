import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    emailjs.init("IzGZomKvYRjg5FY3_");
  }, []);

  const sendMail = (e) => {
    e.preventDefault(); // Prevent default form submission

    let params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      location: document.getElementById("location").value,
    };

    emailjs
      .send("service_ak4nbu9", "template_03r3non", params)
      .then((response) => {
        alert("Message sent successfully!");
        console.log("Success:", response);
      })
      .catch((error) => {
        alert("Failed to send message!");
        console.log("Error:", error);
      });
  };

  return (
    <section className="contact-us">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-details">
          <h2>HEAD OFFICE</h2>
          <p>
            <strong>Mr.බාස් (Pvt) Ltd.</strong> <br />
            Colombo, <br />
            Sri Lanka
          </p>
          <div className="contact-info">
            <div>
              <strong>General Numbers</strong>
              <p>+94741973441</p>
            </div>
            <div>
              <strong>Hotline Numbers</strong>
              <p>+94741973441</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>mrrbasss@gmail.com</p>
            </div>
            <div>
              <strong>Websites</strong>
              <p>mrbass.web.lk</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="inquiry-form">
          <h2>INQUIRE</h2>
          <p>Our professional team is ready to assist you anytime.</p>
          <form onSubmit={sendMail}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="location">Your Preferred Location</label>
              <select id="location">
                <option>Select Location</option>
                <option>Colombo</option>
                <option>Kandy</option>
                <option>Galle</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
