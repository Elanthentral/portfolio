import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "../UI/card";
import "./style.css";
import Button from "../UI/Button";
import MediamHeading from "../UI/MediamHeading";
import emails from "../../assets/images/email.jpg";

function ContactForm() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  useEffect(() => {}, [status]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n3gf7tf",
        "template_jk53j58",
        e.target,
        "4qo6UPFjLfR4yqsyx"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          console.log("sucess");
          setStatus(true);
          clearField();
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
          console.log("fail");
        }
      );
  };
  const clearField = () => {
    setEmail("");
    setName("");

    setMsg("");
  };

  return (
    <div className="container section-spacing" id="contact">
      <Card className="contact-container">
        <div className="contact-form">
          <MediamHeading text="Get in touch" />

          <form className="mt-15" onSubmit={sendEmail} ref={form}>
            <label className="">Name</label>
            <input
              className=""
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label className="">Email</label>
            <input
              className=""
              type="text"
              placeholder="Email"
              name="user_email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="">Message</label>
            <textarea
              placeholder="Type Message here..."
              name="message"
              value={msg}
              required
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <input
              label="Send Me"
              value="Send"
              type="submit"
              className="mail-btn"
            />
          </form>
          <h3>{status && "Thanks for contact me"}</h3>
        </div>
        <div className="contact-detail ">
          {/* <MediamHeading text="Address" className="" /> */}
          <img src={emails} className="" />
          {/* <ul className="addr-content mt-15">
            <li>
              <i class="fa-regular fa-envelope"></i>ethentral@gmail.com
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>+91 9994195740
            </li>
          </ul> */}
        </div>
      </Card>
    </div>
  );
}

export default ContactForm;
