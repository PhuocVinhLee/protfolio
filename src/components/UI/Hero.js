import React from "react";

import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className="pt-0 border border-orange-600" id="about">
            <div className="container border border-orange-600 pt-14">
                <div className=" border border-orange-600 flex items-center justify-between flex-col md:flex-row">
                
                    <div className="  border border-orange-600 w-full md:basis-1/2">
                        <h5 data-aos='fade-right' data-aos-duration='1500'
                            className=" text-headingColor font-[600] text-[16px]">
                            Hello welcome
                        </h5>
                        <h1 className="mt-5 leading-[35px] sm:leading-[46px] text-[1.8rem] 
            sm:text-[40px] text-headingColor font-[800]" data-aos='fade-up' data-aos-duration='1500' >
                            Helo ban bam nho  <br />yeu 
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
                            className=" border border-red-600 flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
                            <span>
                                <i class="ri-apps-2-line"></i>
                            </span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                            minima eaque? Quaerat fuga tenetur eligendi placeat doloremque!
                            AAAAAAAAAAAA
                            Aperiam, amet! Facilis.
                        </p>

                        <div className="border border-yellow-400 flex items-center  gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">
                                Follow me:
                            </span>
                            <span>
                                <a
                                    href="#youtube"
                                    className="text-smallTextColor text-[18px] font-[600]"
                                >
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#youtube"
                                    className="text-smallTextColor text-[18px] font-[600] ">
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#youtube"
                                    className="text-smallTextColor text-[18px] font-[600]"
                                >
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>


                        </div>

                    </div>

                    <div className="basis-1/3 mt-10 sm:mt-0">
                        
                        <figure className="flex items-center justify-center">
                            <img className="border border-red-700" src={heroImg} alt=" " />
                        </figure>
                    </div>

                    <div className="border border-yellow-400 md:basis-1/5 flеx justify-between text-center mt-10 flex-wrap gap-3 
                    md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px] ">
                                <CountUp start={0} end={6} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Years of experience
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
                                <CountUp start={0} end={249} duration={2} suffix="+" />
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