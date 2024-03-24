import { useState, useEffect } from "react";
import React from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [selectTap, setSelectTap] = useState('all')
    const [showModal, setShowModal] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const showModelHandle = (id) => {
        setShowModal(true)
        setActiveId(id)
    

    }

    const handleSetSelectTap = () => {
        console.table(data)

        if (selectTap === 'web') {
            const filterdata = data.filter((item) => item.category === 'Web Design')
            setPortfolios(filterdata);
        } else if (selectTap === 'ux') {
            const filterdata = data.filter((item) => item.category === 'Ux')
            setPortfolios(filterdata);
        }

        else {
            setPortfolios(data);
        }

    }



    useEffect(() => {
        handleSetSelectTap();
    }, [selectTap]);



    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3);
    }
    return (
        <section id="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap"> 
                 {/* { 'flex-wrap pt se xuong dong ra ngoai neu can thiet'} */}
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor text-[2rem] font-[700]">
                            My recent projects
                        </h3>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setSelectTap('all')} className="text-smallTextColor border border-solid ☐ border-smallTextColor py-2 px-4 rounded-[8px] ">
                            All
                        </button>
                        <button onClick={() => setSelectTap('web')} className="text-smallTextColor border border-solid ☐ border-smallTextColor py-2 px-4 rounded-[8px]">
                            Web Design
                        </button>
                        <button onClick={() => setSelectTap('ux')} className="text-smallTextColor border border-solid ☐ border-smallTextColor py-2 px-4 rounded-[8px] ">

                            UX Design
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {/*  gap-4 nhung phan tu se cach nhau 4px */}
                    {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                        <div key={index} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000'
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                            <figure>
                                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
                            </figure>

                            <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0
z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">

                                    <button onClick={() => {
                                        showModelHandle(portfolio.id)
                                    }} className=" text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 
         rounded-[8px] font-[500] ease-in duration-200" > See Details</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                <div className="text-center mt-6">

                    {nextItems < portfolios.length && data.length > 6 && (<button onClick={loadMoreHandler}
                        className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                    >
                        Load More
                    </button>)}

                </div>


                <div>

                </div>
            </div>

            {
                showModal && <Modal setShowModal={setShowModal} activeId = {activeId}></Modal>
            }
        </section>
    );
};
export default Portfolio;