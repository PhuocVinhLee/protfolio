import React, { useRef, useEffect } from 'react'

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')

            }
        });
    }
    useEffect(() => {
        stickyHeader()
        return window.removeEventListener('scroll', stickyHeader)
    }, [])

    const handleClick = (e) =>{
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop
        window.scrollTo({
            top:location - 80,
            left: 0
        })
    }

    const togleMenu = ()=>{
        return menuRef.current.classList.toggle('show_menu')// on off class
    }

    return (
        <header  ref={headerRef} className=' w-full h-[80px] leading-[80px] flex  items-center'>
            <div className=' container '>

                <div className=' flex items-center justify-between'>

                    <div className=' flex items-center gap-[10px]'>
                        <span className=' w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
                         rounded-full flex items-center justify-center'>
                           V
                        </span>

                        <div className=' leading-[20px]' >
                        {/* leading khoang cach tren duoi giua cac Text hoac pt */}
                            <h2 className='text-xl text-smallTextColor font-[700]'> Vinh</h2>
                            <p className=' text-smallTextColor text-[14px] font-[500]'>personal</p>
                        </div>
                    </div>
                    <div ref={menuRef} onClick={togleMenu} className='menu ' >

                        <ul className='flex items-center gap-10'>
                            <li  className=' text-small font-[600]'><a onClick={handleClick}   href="#about">About</a></li>
                            <li   className=' text-small font-[600]'><a onClick={handleClick}  href="#service"> Service</a></li>
                            <li  className=' text-small font-[600]'><a  onClick={handleClick}  href="#portfolio"> Portfolio</a></li>
                            <li  className=' text-small font-[600]'><a onClick={handleClick}  href="#contact"> Contact</a></li>
                        </ul>
                    </div>

                    <div className='  flex items-center gap-4'>
                        <button className=' flex items-center gap-2 text-sm font-[600] border border-solid
     border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]  hover:bg-smallTextColor
       hover:text-white  hover:font-[500] ease-in duration-300'>
                            <i className='ri-send-plane-line'></i> Lest's Talk
                        </button>
                        
                        <span onClick={togleMenu} className=' text-2xl text-smallTextColor md:hidden cursor-pointer'>
                            <i className='ri-menu-line'></i>
                        </span>
                    </div>

                </div>

            </div>

        </header>
    )
}

export default Header