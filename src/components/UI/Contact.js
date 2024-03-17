import React from "react";

const Contact = () => {

    return (
        <section id="contact" className="pb-16">
            <div className=" container">
                <h2 className=" text-headingColor font-[700] text-[2.5rem] mb-8">Get touch it</h2>
                <div className=" md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px]  sm:h-[450px]">
                        <iframe className="h-full w-full border-0" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1710602381597!5m2!1svi!2s"
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px
lg:px-8 py-8">
                        <form className="w-full">
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 focus: outline-none rounded-[5px]" />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <div className="mb-5">
                                <textarea
                                    type="text"
                                    rows={3}
                                    placeholder="Wirte your messager"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <button onClick={(e)=>{
e.preventDefault()
                            }} className=" w-full p-3 focus:outline-none rounded-[5px]
                              bg-smallTextColor text-white hover:bg-headingColor text-center
                               ease-linear duration-150"> Send</button>
                        </form>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Contact