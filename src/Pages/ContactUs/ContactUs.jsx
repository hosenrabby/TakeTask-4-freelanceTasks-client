import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router';

const ContactUs = () => {
    const navigete = useNavigate()
    return (
        <>
        <title>Take Task | Contact Us</title>
            <div className="bg-base-100 w-10/12 mx-auto">
                {/* Header Section */}
                <div className="w-10/12 mx-auto mt-10 bg-[url(/assets/bg-become.jpg)] bg-cover bg-center rounded-2xl">
                    <div className="p-10 md:ps-40 md:py-11 space-y-4">
                        <h1 className="text-3xl font-bold text-white">Contact us</h1>
                        <p className="text-white text-lg">We’d love to talk about how we can help you.</p>
                        <button onClick={()=>navigete('/')} className='flex items-center gap-1.5 p-3 px-5 transition rounded-md bg-[#5BBB7B] hover:bg-white hover:text-black border-none'><GoArrowLeft />
                            Go Home</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-8 p-6 md:p-12">
                    {/* Contact Info */}
                    <div className="bg-base-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Keep In Touch With Us.</h3>
                        <p className="text-base-content mb-6">We like to rich you if you like to connect with us.</p>

                        <div className="space-y-6 text-sm text-base-content">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <FaMapMarkerAlt className="text-green-800" size={18} />
                                </div>
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p>35/1 west Bhasantak, Dhaka Cantonment.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <FaPhoneAlt className="text-green-800" size={18} />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p>+(880) 186 425 9966</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <FaEnvelope className="text-green-800" size={18} />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p>tahmid.tuhin.3@gmail.com.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-base-100 shadow-md px-10 py-16 rounded-lg md:-mt-32">
                        <h3 className="text-lg font-semibold mb-4">Tell us about yourself</h3>
                        <p className="text-sm text-base-content mb-8">Whether you have questions or you would just like to say hello, contact us.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <input type="text" placeholder="Enter Your Name" className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"/>
                            <input type="email"  placeholder="example@gmail.com" className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2  focus:ring-green-500"/>
                        </div>

                        <textarea placeholder="Description" rows={12} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"/>

                        <button type="submit" className="bg-[#5BBB7B] text-base-content px-6 py-4 rounded font-medium flex items-center space-x-2 hover:bg-[#1F4B3F]  transition">
                            <span>Send Messages</span>
                            <FaArrowRight size={14} />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;