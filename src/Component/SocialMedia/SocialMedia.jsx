import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function SocialMedia() {
    return (
        <div className='flex px-3 items-center gap-5 pb-0.5'>
            <div>
                <Link to="#">
                    <FaFacebookF className='w-5 h-5 text-white hover:text-orangeCus transition-all duration-300' />
                </Link>
            </div>
            <div>
                <Link to="#">
                    <TiSocialInstagram className='w-5 h-5 text-white hover:text-orangeCus transition-all duration-300' />
                </Link>
            </div>
            <div>
                <Link to="#">
                    <FaYoutube className='w-5 h-5 text-white hover:text-orangeCus transition-all duration-300' />
                </Link>
            </div>
            <div>
                <Link to="#">
                    <FaGoogle className='w-5 h-5 text-white hover:text-orangeCus transition-all duration-300' />
                </Link>
            </div>
            <div>
                <Link to="#">
                    <FaTiktok className='w-5 h-5 text-white hover:text-orangeCus transition-all duration-300' />
                </Link>
            </div>
        </div>
    )
}
