import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Footer() {
    return (
        <div className='bg-[#1C1E20] py-3 md:pt-[25px] md:pb-[65px] font-light text-white'>
            <div className='container'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-[25px]'>
                    <div className='flex flex-col gap-[25px] md:gap-0 md:flex-row md:items-center'>
                        <div className='flex flex-col gap-[25px] pr-3'>
                            {/* img */}
                            <div>
                                <img className=' w-[165px] h-[62px] md:w-[235px] md:h-[88px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="1" />
                            </div>
                            {/* menus */}

                            <ul className='flex w-auto md:w-[415px] child:text-sm md:child:text-base gap-2.5 font-medium mt-[25px]'>
                                <li >
                                    <Link to='#'>
                                        Our Cars
                                    </Link>
                                </li>
                                <li  >
                                    <Link to='#'>
                                        Blog
                                    </Link>
                                </li>
                                <li  >
                                    <Link to='#'>
                                        Contact Us
                                    </Link>
                                </li>
                                <li  >
                                    <Link to='#'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li  >
                                    <Link to='#'>
                                        Rental Policy
                                    </Link>
                                </li>
                                <li  >
                                    <Link to='#'>
                                        Testimonial
                                    </Link>
                                </li>
                            </ul>

                            {/* forms */}
                            <div>
                                <h3 className='text-[23px]/[27px]'>Subscribe Newsletter</h3>
                                <div className='flex items-center mt-[30px] gap-8'>
                                    <input className='text-[15px]/[22.5px] px-[15px] w-[249px] h-11 text-[#C1C1C1] outline-none rounded-md' placeholder='Email address' type="text" />
                                    <Button link='#' classes='bg-[#454545] w-[124px] h-11 p-[5px] text-sm/[21px] rounded-md'>
                                        <span>Subscribe</span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* about us */}
                        <div className='px-3 flex flex-col gap-3 font-medium'>
                            {/* Mobile */}
                            <div className='group'>
                                <div className='flex gap-2.5 items-center'>
                                    <img className='w-[35px] h-[35px]' src="https://mkrentacar.com/public/assets/images/call-icon.png" alt="1" />
                                    <span className='text-sm/[26px] font-bold group-hover:text-orangeCus2 transition-all duration-300'>Mobile:</span>
                                </div>
                                <div className='flex flex-col child:text-sm/[26px] ml-[45px] child:group-hover:text-orangeCus2 child:cursor-pointer child:transition-all child:duration-300'>
                                    <span>+971589595959</span>
                                    <span>+971558009990</span>
                                    <span>+971524349551 - French</span>
                                    <span>+971521640276 - Russian</span>
                                </div>
                            </div>
                            {/* Address */}
                            <div className='group'>
                                <div className='flex gap-2.5 items-center'>
                                    <img className='w-[35px] h-[35px]' src="https://mkrentacar.com/public/assets/images/location.png" alt="1" />
                                    <span className='text-sm/[26px] font-bold group-hover:text-orangeCus2 transition-all duration-300'>Address:</span>
                                </div>
                                <div className='flex flex-col child:text-sm/[26px] ml-[45px]'>
                                    <span className='group-hover:text-orangeCus2 transition-all duration-300 cursor-pointer'>39 Al Rasaas Rd-  Al Quoz, Dubai </span>
                                </div>
                            </div>
                            {/* Timing */}
                            <div className='group'>
                                <div className='flex gap-2.5 items-center'>
                                    <img className='w-[35px] h-[35px]' src="https://mkrentacar.com/public/assets/images/service-24-7.png" alt="1" />
                                    <span className='text-sm/[26px] font-bold group-hover:text-orangeCus2 transition-all duration-300'>Timing:</span>
                                </div>
                                <div className='flex flex-col child:text-sm/[26px] ml-[45px]'>
                                    <span className='group-hover:text-orangeCus2 transition-all duration-300 cursor-pointer'>24/7 service</span>
                                </div>
                            </div>


                        </div>

                    </div>

                    {/* maps */}
                    <div className='px-3 w-full md:w-[416px] justify-self-end'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14448.113325826185!2d55.225886!3d25.134733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834f43fffff%3A0x61d8e53aea951295!2sMasterkey%20Luxury%20Car%20Rental%20Dubai!5e0!3m2!1sen!2sus!4v1692279487505!5m2!1sen!2sus" width="100%" height="300" className='rounded-[20px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                  
                  {/* brands */}
                <div className='flex items-center mt-[50px] gap-2 font-medium'>
                    <span className='text-orangeCus'>Brands</span>
                      <div className='w-full h-px bg-orangeCus'></div>
                </div>

                <div className='font-medium'>
                    <ul className='flex flex-wrap md:gap-1.5'>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Ferrari</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Lamborghini</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Bentley</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Rolls-Royce</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Porsche</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Mercedes</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Land Rover</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Audi</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>BMW</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Cadillac</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Chevrolet</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Nissan</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>McLaren</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>GMC</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Mini Cooper</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Kia</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Fiat</Link>
                        </li>
                        <li className='px-[5px] py-2.5'>
                            <Link to="#" className='text-[11px]/[16px] md:text-[15px]/[22.5px] hover:text-orangeCus transition-all duration-300'>Ford</Link>
                        </li>
                    </ul>
                </div>

                <div className='mt-5 flex justify-between items-center'>
                    <SocialMedia border= {true} />
                    <div className='flex gap-2.5 md:px-7'>
                         <img className='w-7 h-7 md:w-10 md:h-10' src="https://mkrentacar.com/public/assets/images/visa.png" alt="1" />
                         <img className='w-7 h-7 md:w-10 md:h-10' src="https://mkrentacar.com/public/assets/images/mastercard.png" alt="1" />
                         <img className=' w-7 h-7 md:w-10 md:h-10' src="https://mkrentacar.com/public/assets/images/crypto.png" alt="1" />
                         <img className=' w-7 h-7 md:w-10 md:h-10' src="https://mkrentacar.com/public/assets/images/tabby.png" alt="1" />
                    </div>
                </div>
            </div>
        </div>
    )
}