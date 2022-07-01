import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-gray-100">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href={"/"}><a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={"/images/study.jpg"} height={40} width={40} className="rounded-md" />
                        <span className="ml-3 text-xl">Learning Time</span>
                    </a></Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2022 Learning Time —
                        <a
                            href="https://github.com/shubham1888"
                            className="textstrokeLinecap-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            All rights reserved
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link href={"https://www.facebook.com/shubham.shah.1888/"}><a target="_blank" className="text-gray-500 hover:text-blue-400">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a></Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
