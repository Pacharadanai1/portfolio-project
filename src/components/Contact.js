import { useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [emailCounts, setEmailCounts] = useState({});

  const iconMap = {
    faFacebook: faFacebook,
    faPhone: faPhone,
    faGithub: faGithub,
    faEnvelope: faEnvelope,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;

    if (emailCounts[email] && emailCounts[email] >= 3) {
      toast.error("You have reached the maximum number of messages allowed.");
      return;
    }

    emailjs
      .sendForm(
        "service_petch24",
        "template_petch24",
        form.current,
        "qvlcMzOQV3JMya26I"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email sent successfully");

          setEmailCounts((prevCounts) => ({
            ...prevCounts,
            [email]: (prevCounts[email] || 0) + 1,
          }));
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white py-14 px-5" id="contact">
      <Toaster />
      <div className="md:container mx-auto flex flex-col items-center gap-10">
        {/* Contact Form */}
        <div className="flex-1 w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-2">{Contact.title}</h2>
          <h4 className="italic text-lg mb-6">{Contact.subtitle}</h4>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-gray-500 p-2 rounded bg-dark_primary text-white w-full"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              required
              className="border border-gray-500 p-2 rounded bg-dark_primary text-white w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="border border-gray-500 p-3 rounded bg-dark_primary text-white w-full h-32"
            ></textarea>
            <button className="bg-white text-dark_primary font-bold py-2 px-4 rounded w-32 mx-auto">
              Submit
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex gap-5">
          {Contact.social_media.map((content, i) => (
            <a
              key={i}
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-gray-400"
            >
              <FontAwesomeIcon icon={iconMap[content.icon]} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;