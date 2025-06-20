import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 projectheader">Contact Me</h2>
      <p className="text-center ">
        Feel free to reach out for collaborations, projects, or any inquiries!
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form action="https://formsubmit.co/hassanazmat079@gmail.com" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control inputkoset"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control inputkoset"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control inputkoset"
                id="message"
                rows="5"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
   
   
    </div>
  );
};

export default Contact;
