import React, { useState } from "react";
import { FcCallback } from "react-icons/fc";
import { FaEnvelope } from "react-icons/fa";
import { send } from "emailjs-com";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import Modal from "../components/Modal";

function Contact() {
  const [modal, showModal] = useState(false);
  const [content, setContent] = useState("");
  const [from_name, setName] = useState("");
  const [reply_to, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    const formMessage = { from_name, reply_to, subject, message };

    send(
      "service_ibssx9r",
      "template_494udvi",
      formMessage,
      "QKUlhBfAlmWCJAStR"
    )
      .then((response) => {
        showModal(true);
        setContent("Message received");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        showModal(true);
        setContent("An errror occured!");
      });
  };

  return (
    <div className="contact" id="contact">
      {modal && <Modal showModal={showModal} content={content} />}
      <h2>Contact</h2>
      <hr className="w-[40px] border-2 mb-4" />
      <p className="w-10/11 md:w-3/5 lg:w-2/5 text-center">
        I am open to work, network or collaborate, Got a job for me ? or an idea
        we can work on together ? Shoot me a DM on my socials or send a message
        through the contact form.
      </p>
      <div className="contacts">
        <div>
          <p className="phone mb-4">
            <a href="tel:+2349034872219">
              <FcCallback />
              (+234)9034872219
            </a>
          </p>
          <p>
            <a href="mailto:ezekielabolade@gmail.com">
              <FaEnvelope />
              ezekielabolade@gmail.com
            </a>
          </p>
          <div className="flex gap-4 my-6">
            <a href="http://twitter.com/zeekcodes">
              <BsTwitter className="text-[24px]" />
            </a>
            <a href="https://wa.me/qr/YALRGMUPOL3YK1">
              <BsWhatsapp className="text-[24px]" />
            </a>
            <a href="https://instagram.com/heistheface">
              <BsInstagram className="text-[24px]" />
            </a>
            <a href="https://linkedin.com/in/ezekiel-abolade">
              <BsLinkedin className="text-[24px]" />
            </a>
            <a href="https://github.com/thefacecodes">
              <BsGithub className="text-[24px]" />
            </a>
          </div>
          <button
            className="px-6 py-2 text-white rounded bg-[#51516D]"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Hide Form" : "Send Message"}
          </button>
        </div>
        {showForm && (
          <form onSubmit={sendMessage}>
            <label htmlFor="name">Name :</label>
            <input
              autoComplete="off"
              required
              type="text"
              value={from_name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              id="name"
            />
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              value={reply_to}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter email address"
              id="email"
            />
            <label htmlFor="subject">Subject</label>
            <input
              autoComplete="off"
              required
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              placeholder="Enter message subject"
              id="subject"
            />
            <label htmlFor="subject">Message</label>
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Message"
              id="message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
