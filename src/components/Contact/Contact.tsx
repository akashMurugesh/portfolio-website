import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_a0m12l8",
                    "template_a0m12l8",
                    form.current,
                    "jJYnO9s5NL-XASZQH"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        toast.success("Message sent successfully!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    },
                    (error) => {
                        console.log(error.text);
                        toast.error("Error sending message", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                );

            form.current.reset();
        }
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">
                        Let's talk about anything!
                    </h3>
                    <p className="contact__details">
                        Don't like forms? Send me an email.{" "}
                    </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                name="user_name"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                name="user_email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            name="subject"
                            placeholder="Enter your subject"
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name="message"
                            id=""
                            cols={30}
                            rows={10}
                            className="contact__form-input"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <button className="btn">
                        Send Message
                    </button>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;
