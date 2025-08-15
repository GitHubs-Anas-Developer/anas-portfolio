"use client";
import axios from "axios";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

function Contact() {
    const [messageForm, setmessageForm] = useState({
        email: "",
        name: "",
        messages: ""
    });
    const [loading, setLoading] = useState(false)

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await axios.post(
                "https://anas-portfolio-server.onrender.com/api/v1/send-messages",
                messageForm
            );
            if (result.status === 200) {
                toast.success("Message sent successfully! 📩");
                setmessageForm({
                    email: "",
                    name: "",
                    messages: ""
                })
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message ❌");
        } finally {
            setLoading(false); // ensures loading stops in both success & error
        }
    };



    return (
        <div className="bg-slate-900 py-10">
            <div className="text-center py-6">
                <span className="text-white font-bold text-3xl">Contact</span>
                <span className="text-green-300 font-bold text-3xl ml-2">Me</span>
                <p className="font-bold text-gray-400 text-lg leading-relaxed">
                    Have a project in mind or want to discuss potential opportunities? I'd
                    love to hear from you.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact Form */}
                    <div className="border border-gray-700 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 rounded-lg p-6">
                        <h3 className="text-3xl font-bold text-gray-400 text-center mb-6">
                            Send Me a Message
                        </h3>
                        <form className="space-y-4" onSubmit={sendMessage}>
                            <div>
                                <label className="block text-lg text-gray-400 font-bold mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border-0 bg-white rounded-lg focus:outline-none"
                                    value={messageForm.name}
                                    onChange={(e) =>
                                        setmessageForm({ ...messageForm, name: e.target.value })
                                    }
                                    required
                                />

                            </div>

                            <div>
                                <label className="block text-lg text-gray-400 font-bold mb-1">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-3 border-0 bg-white rounded-lg focus:outline-none"
                                    value={messageForm.email}
                                    onChange={(e) =>
                                        setmessageForm({ ...messageForm, email: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg text-gray-400 font-bold mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full p-3 border-0 bg-white rounded-lg focus:outline-none"
                                    value={messageForm.messages}
                                    onChange={(e) =>
                                        setmessageForm({
                                            ...messageForm,
                                            messages: e.target.value
                                        })
                                    }
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-400 text-white font-bold py-3 rounded-lg transition"

                                disabled={loading}>
                                {loading ? "sending " : " Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="border border-gray-700  rounded-lg p-6 flex flex-col justify-center text-gray-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20">
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

                        <div className="flex items-center gap-2 mb-2 border border-gray-500 rounded-lg p-3">
                            <IoLocation className="text-green-300 text-2xl" />
                            <span>Ajman, UAE</span>
                        </div>

                        <div className="flex items-center gap-2 mb-2 border border-gray-500 rounded-lg p-3">
                            <MdEmail className="text-green-300 text-2xl" />
                            <span>anascoding@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-2 border border-gray-500 rounded-lg p-3">
                            <FaPhone className="text-green-300 text-2xl  " />
                            <span>+971 55 123 4567</span>
                        </div>


                        <div className="mt-3  ">
                            <h3 className="text-lg text-white font-bold">Follow Me </h3>
                            <div className="flex gap-3">
                                <Link href={"https://github.com/GitHubs-Anas-Developer"} className="border p-3.5 rounded-full">
                                    <FaGithub className="text-3xl" />
                                </Link>
                                <Link href={"https://www.linkedin.com/in/anas-cv-842528369"} className="border p-3.5 rounded-full">
                                    <FaLinkedin className="text-3xl" />
                                </Link>
                                <Link href={""} className="border p-3.5 rounded-full">
                                    <FaSquareInstagram className="text-3xl" />
                                </Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />

        </div>
    );
}

export default Contact;
