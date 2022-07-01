import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="sticky">
      <header className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={"/images/study.jpg"} height={40} width={40} className="rounded-md"  />
            <span className="ml-3 text-xl">Learning Time</span>
          </a></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex font-bold flex-wrap items-center text-base justify-center">
            <Link href={"/"}><a className="mr-5 hover:text-gray-900">Home</a></Link>
            <Link href={"/science"}><a className="mr-5 hover:text-gray-900">Science</a></Link>
            <Link href={"/math"}><a className="mr-5 hover:text-gray-900">Math</a></Link>
            <Link href={"/computer"}><a className="mr-5 hover:text-gray-900">Computer</a></Link>
            <Link href={"/solveaquestion"}><a className="mr-5 hover:text-gray-900">Solve a question</a></Link>
            <Link href={"/ourcourses"}><a className="mr-5 hover:text-gray-900">Our Courses</a></Link>
          </nav>
          <form action="" method="get">
          <input type="text" id="name" placeholder="search a question" name="name" className="w-full bg-slate-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </form>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
