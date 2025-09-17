import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import { FiLinkedin } from "react-icons/fi"
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { assets } from '../assets/assets';

const Footer = () => {
  return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-[#274472] max-md:mb-16">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-200">
                
                <div className="max-w-96">
                   <div className='flex items-center gap-2 text-2xl font-bold text-white                                                                          '>
                     <img src={assets.logo} className='w-10' />
                    <span>TimeAura</span>
                   </div>
                    <p className="mt-6 text-sm text-gray-200 pb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-white ">
                        <a href="#">
                           <p className='hover:-translate-y-1 duration-150'><BsTwitterX/></p>
                        </a>
                        <a href="https://github.com/nikhilsharma9548  ">
                            <p className='text-xl hover:-translate-y-1 duration-150'><FaGithub/></p>
                        </a>
                        <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341">
                            <p className='text-xl hover:-translate-y-1 duration-150'><FiLinkedin/></p>
                        </a>
                    </div>
                </div>
        
                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                    <div>
                        <h2 className="font-semibold text-gray-300 mb-5">RESOURCES</h2>
                        <ul className="text-sm text-gray-50 space-y-2 list-none">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-300 mb-5">COMPANY</h2>
                        <div className="text-sm text-gray-50 space-y-2 list-none">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </div>
                    </div>
                </div>
        
            </div>
            <p className="py-4 text-center text-xs md:text-sm text-gray-50">
                Copyright 2024 © Nikhil Shamra. All Right Reserved.
            </p>
        </footer>
    );
}

export default Footer