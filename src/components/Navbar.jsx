import { useState } from 'react'
import { CloseIcon, MenuIcon } from './SVG/SVGComponents'

function Navbar() {
    const [openMenuIcon, setOpenMenuIcon] = useState(false);
    const navigation = [
        { Name: 'Home' },
        { Name: 'About Me' },
        { Name: 'Services' },
        { Name: 'Projects' },
        { Name: 'Testimonials' },
        { Name: 'Contact' },
    ]
    return (
        <nav className="mx-auto mt-12 h-16 ">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        {openMenuIcon ? (
                            <CloseIcon setOpenMenuIcon={setOpenMenuIcon} />
                        ) : (
                            <MenuIcon setOpenMenuIcon={setOpenMenuIcon} />
                        )}
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src="/assets/logo.png" alt="logo" className='w-[65px] h-[65px]' />
                        <h1 className="font-montserrat leading-[58px] text-[#1E1E1E] flex gap-1 font-bold whitespace-nowrap tracking-[1px] text-[48px]">
                            M<span className='font-normal'>umair</span>
                        </h1>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navigation.map((item, key) =>
                            (
                                <li
                                    key={key}
                                    className="list-none rounded-md p-0.5 transition duration-300"
                                >
                                    <p className='text-[21px] leading-8'>{item.Name}</p>
                                </li>
                            )
                            )}
                            <li
                                className="list-none rounded-md p-0.5 transition duration-300"
                            >
                                <button className='rounded-[5px] w-[188px] h-14 bg-[#FD6F00] text-[21px] leading-8 text-white'>Download CV</button>
                            </li>
                        </div>
                    </div>
                    {/* <div className="ml-4 items-center">
                            <button
                                type="button"
                                onClick={() => setDark(!dark)}
                                className="rounded-md px-3 py-1 transition duration-300"
                            >
                                {dark ? (
                                    <DarkThemeIcon />
                                ) : (
                                    <LightThemeIcon />
                                )}
                            </button>
                        </div> */}
                </div>
            </div>
            {openMenuIcon &&
                <div className="space-y-4 px-2 py-4 w-full md:hidden">
                    {navigation.map((item, key) =>
                    (
                        <li
                            key={key}
                            className="list-none rounded-md"

                        >
                            {item.Name}
                        </li>
                    )
                    )}
                </div>
            }
        </nav>
    )
}

export default Navbar