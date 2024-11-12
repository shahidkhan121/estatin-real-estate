import React from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* footer */}
            <footer>
                <div className="flex justify-between gap-10 font-urbanist max-w-[92%] m-auto py-20 800px:flex-col">
                    <div className="flex flex-col gap-10 mb-14 ">
                        {/* logo */}
                        <div className="">
                            <img src="img/logo.png" alt="logo" width={120} />
                        </div>
                        {/* input */}
                        <div className="flex items-center justify-between px-4 w-72 py-2 border border-black-p rounded-lg">
                            <input type="text" placeholder="✉Enter Your Email" className="bg-black-dark text-black-p outline-none" />
                            <div className="text-white text-xl">
                                <IoIosSend />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-20">
                        {/* links */}
                        <div className="flex flex-col gap-3 mb-10 ">
                            <h1 className="text-black-p text-lg mb-3">Home</h1>
                            <Link>
                                <p className="text-white">Hero Section</p>
                            </Link>
                            <Link>
                                <p className="text-white">Features</p>
                            </Link>

                            <Link>
                                <p className="text-white">Properties</p>
                            </Link>
                            <Link>
                                <p className="text-white">Testominal's</p>
                            </Link>
                            <Link>
                                <p className="text-white">FaQ's</p>
                            </Link>
                        </div>

                        {/* links */}
                        <div className="flex flex-col gap-3 mb-10 ">
                            <h1 className="text-black-p text-lg mb-3">About Us</h1>
                            <Link>
                                <p className="text-white">Our Story</p>
                            </Link>
                            <Link>
                                <p className="text-white">Our Works</p>
                            </Link>

                            <Link>
                                <p className="text-white">How It Works</p>
                            </Link>
                            <Link>
                                <p className="text-white">Our Team</p>
                            </Link>
                            <Link>
                                <p className="text-white">Our Clients</p>
                            </Link>
                        </div>

                        {/* links */}
                        <div className="flex flex-col gap-3 mb-10">
                            <h1 className="text-black-p text-lg mb-3">Properties</h1>
                            <Link>
                                <p className="text-white">Portfolio</p>
                            </Link>
                            <Link>
                                <p className="text-white">Categories</p>
                            </Link>
                        </div>

                        {/* links */}
                        <div className="flex flex-col gap-3 mb-10">
                            <h1 className="text-black-p text-lg mb-3">Services</h1>
                            <Link>
                                <p className="text-white">Valution Mystrey</p>
                            </Link>
                            <Link>
                                <p className="text-white">Stratagic Markiting</p>
                            </Link>

                            <Link>
                                <p className="text-white">Nigoatation Wizardy</p>
                            </Link>
                            <Link>
                                <p className="text-white">Closing Success</p>
                            </Link>
                            <Link>
                                <p className="text-white">Property Managment</p>
                            </Link>
                        </div>

                        {/* links */}
                        <div className="flex flex-col gap-3 mb-10 ">
                            <h1 className="text-black-p text-lg mb-3">Contact US</h1>
                            <Link>
                                <p className="text-white">Contact Form</p>
                            </Link>
                            <Link>
                                <p className="text-white">Our Office</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
