import { useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  const iconMap = {
    faFacebook: faFacebook,
    faPhone: faPhone,
    faInstagram: faInstagram,
    faEnvelope: faEnvelope,
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
      <div className="md:container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Contact Form */}
        <div className="flex-1 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-2">{Contact.title}</h2>
          <h4 className="italic text-lg mb-6">{Contact.subtitle}</h4>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-gray-500 p-3 rounded bg-dark_primary text-white w-full"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              required
              className="border border-gray-500 p-3 rounded bg-dark_primary text-white w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="border border-gray-500 p-3 rounded bg-dark_primary text-white w-full h-32"
            ></textarea>
            <button className="bg-white text-dark_primary font-bold py-2 px-4 rounded w-32">
              Submit
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex-1 w-full max-w-lg space-y-4">
          {Contact.social_media.map((content, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon icon={iconMap[content.icon]} className="text-xl" />
              <a className="font-Poppins" href={content.link} target="_blank" rel="noopener noreferrer">
                {content.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;