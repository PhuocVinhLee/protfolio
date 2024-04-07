import React from "react";

import heroImg from '../../assets/images/hero.svg'
import heroImg2 from '../../assets/images/B1910176.JPG'
import CountUp from 'react-countup';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

const Mailto = ({ email, subject, body, children }) => {
    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
};

const Hero = () => {
    return (
        <section className="pt-0 " id="about">
            <div className="container   pt-14">
                <div className="   flex items-center justify-between flex-col md:flex-row">

                    <div className="   w-full md:basis-1/2">
                        <h5 data-aos='fade-right' data-aos-duration='1500'
                            className=" text-headingColor font-[600] text-[16px]">
                            Hello welcome
                        </h5>
                        <h1 className="mt-5 leading-[35px] sm:leading-[46px] text-[1.8rem] 
            sm:text-[40px] text-headingColor font-[800]" data-aos='fade-up' data-aos-duration='1500' >
                            I'm Vinh <br />
                            Front-End Developer
                        </h1>
                        <div data-aos="fade-up" data-aos-duration='1800'
                            data-aos-delay='200' className="flex items-center gap-5 mt-7">
                            <a href="#contact"> <button className=" bg-primaryColor text-white font-[500] flex items-center gap-2
                            hover:bg-smallTextColor ease-in duration-300 px-4 rounded-[8px]"> <i class="ri-mail-line"></i> Here</button></a>
                            <a
                                href="#portfolio"
                                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor">
                                See portfolio
                            </a>
                        </div>

                        <p data-aos="fade-left"
                            data-aos-duration="1500"
                            className="  border-red-600 flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
                            <span>
                                <i class="ri-apps-2-line"></i>
                            </span>
                            We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.
                        </p>

                        <div className="flex items-center  gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">

                                Connect with me:
                            </span>
                            <span><Mailto email="lephuocvinh264@gmail.com" subject="Hello & Welcome" body="Your message">
                                <MdOutlineMailOutline  size={35}/>
                            </Mailto>
                            </span>
                            
                            {/* <span>
                            <MdOutlineMailOutline  />
                            </span> */}
                            <a href="https://www.facebook.com/profile.php?id=100008690539281" >
                                <MdOutlineFacebook size={35} />
                            </a>
                            <span>

                            <a href="tel:+84788763209">  <   FaPhoneVolume size={35} /></a>
                       

                            </span>


                        </div>

                    </div>

                    {/* <div className="basis-1/3 mt-10 sm:mt-0">
                        
                        <figure className="flex items-center justify-center">
                            <img className="border border-red-700" src={heroImg} alt=" " />
                        </figure>
                    </div> */}
                    <div className="basis-1/3 mt-10 sm:mt-0">

                        <figure className="flex items-center justify-center">
                            <img className=" rounded-[10rem]" src={heroImg2} alt=" " />
                        </figure>
                    </div>

                    <div className=" md:basis-1/5 flеx justify-between text-center mt-10 flex-wrap gap-3 
                    md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px] ">
                                <CountUp start={0} end={6} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                {/* Years of experience */}
                                Months experience
                            </h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px] ">
                                <CountUp start={0} end={100} duration={2} suffix="%" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Success rate
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px] ">
                                <CountUp start={0} end={150} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Happy clinets
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px] ">
                                <CountUp start={0} end={5} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Projets Completed
                            </h4>
                        </div>
                    </div>
                    { /* hero content right end */}

                </div>
            </div>
        </section >
    )
}

export default Hero