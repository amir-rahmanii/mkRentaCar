import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function SocialMedia({border}) {
    return (
        <div className={`${border ? 'flex gap-2' : 'hidden xl:flex gap-5 '}  md:px-3 items-center pb-0.5`}>
            <div className={`${border ? "bg-[#454545] p-2 rounded-full" : ""}`}>
                <Link to="#">
                    <FaFacebookF className={`${border ? 'w-4 h-4' : "w-5 h-5"} text-white hover:text-orangeCus transition-all duration-300`} />
                </Link>
            </div>
            <div className={`${border ? "bg-[#454545] p-2 rounded-full" : ""}`}>
                <Link to="#">
                    <TiSocialInstagram className={`${border ? 'w-4 h-4' : "w-5 h-5"} text-white hover:text-orangeCus transition-all duration-300`} />
                </Link>
            </div>
            <div className={`${border ? "bg-[#454545] p-2 rounded-full" : ""}`}>
                <Link to="#">
                    <FaYoutube className={`${border ? 'w-4 h-4' : "w-5 h-5"} text-white hover:text-orangeCus transition-all duration-300`} />
                </Link>
            </div>
            <div className={`${border ? "bg-[#454545] p-2 rounded-full" : ""}`}>
                <Link to="#">
                    <FaGoogle className={`${border ? 'w-4 h-4' : "w-5 h-5"} text-white hover:text-orangeCus transition-all duration-300`} />
                </Link>
            </div>
            <div className={`${border ? "bg-[#454545] p-2 rounded-full" : ""}`}>
                <Link to="#">
                    <FaTiktok className={`${border ? 'w-4 h-4' : "w-5 h-5"} text-white hover:text-orangeCus transition-all duration-300`} />
                </Link>
            </div>
        </div>
    )
}
