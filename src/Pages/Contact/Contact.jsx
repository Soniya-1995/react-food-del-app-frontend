import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success fst-italic">Contact Us</h1>
        <p className="text-secondary fs-5 mt-3">
          Have a question, feedback, or craving to share? We’d love to hear from you!
        </p>
      </div>

      {/* Contact Details */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-md-4 mb-4">
          <FaPhoneAlt size={30} className="text-success mb-3" />
          <h5 className="fw-bold">Phone</h5>
          <p className="text-muted">+91 98765 43210</p>
        </div>
        <div className="col-md-4 mb-4">
          <FaEnvelope size={30} className="text-success mb-3" />
          <h5 className="fw-bold">Email</h5>
          <p className="text-muted">support@khammaghani.com</p>
        </div>
        <div className="col-md-4 mb-4">
          <FaMapMarkerAlt size={30} className="text-success mb-3" />
          <h5 className="fw-bold">Location</h5>
          <p className="text-muted">Kishangarh, Ajmer, Rajasthan</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow rounded-4 border-0">
            <div className="card-body p-4">
              <h4 className="fw-bold text-success text-center mb-4">
                Send Us a Message
              </h4>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-success px-4 py-2 rounded-pill">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-5 text-center">
        <h4 className="fw-bold text-success mb-3">Find Us on the Map</h4>
        <div className="ratio ratio-16x9 rounded-4 shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14235.818928778944!2d74.8470!3d26.5742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969feaaa7a75e7b%3A0x96f37c3f40b8615d!2sKishangarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
            title="Khamma Ghani Location"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
