import React, {useState, useRef} from 'react'
import {motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { ReactNotifications, Store } from "react-notifications-component";
import {styles} from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { FaDiscord, FaGithub, FaLinkedinIn } from 'react-icons/fa'




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4pdkn7e",
        "template_fstbhp9",
        {
          from_name: form.name,
          to_name: "Temwani",
          from_email: form.email,
          to_email: "contact.temwani.m@gmail.com",
          message: form.message,
        },
        "2vpVe8weer3o42lIC"
      )
      .then(
        () => {
          setLoading(false);
          
          Store.addNotification({
            title: "Email Sent",
            message:
              "Thanks for reaching out, I will get back to you as soon as possible.",
            type: "success",
            insert: "top",
            container: "bottom-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
            },
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          Store.addNotification({
            title: "Uh oh!",
            message: "Something went wrong",
            type: "error",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
            },
          });
        }
      );
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
              outlined-none rounded-lg 
              border-none font-medium
            "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
              outlined-none rounded-lg 
              border-none font-medium
            "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
              outlined-none rounded-lg 
              border-none font-medium
            "
            />
          </label>

          <div className="flex items-center justify-between flex-1 flex-wrap">
            <button
              type="submit"
              className="btn btn-lg btn-outline btn-primary bg-accent/10 cursor-pointer w-1/2"
            >
              {loading ? "Sending.." : "Send"}
            </button>

          

            <div className="flex justify-between max-w-[200px] w-full z-50">
              <a
                className="btn btn-outline btn-accent bg-accent/10 cursor-pointer"
                href="https://www.linkedin.com/in/temwani-munthali/"
                target="_blank"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                className="btn btn-outline btn-accent bg-accent/10 cursor-pointer"
                href="https://discordapp.com/users/799244817014980618"
                target="_blank"
              >
                <FaDiscord size={20} />
              </a>

              <a
                className="btn btn-outline btn-accent bg-accent/10 cursor-pointer"
                href="https://github.com/ItsTemz"
                target="_blank"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");