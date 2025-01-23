import { useState } from 'react'
import { CloseIcon, MenuIcon } from './SVG/SVGComponents'
import { navigation } from '../helpers/navigation';

function Navbar() {
    const [openMenuIcon, setOpenMenuIcon] = useState(false);

    return (
        <nav className="mx-auto mt-12 h-16 px-4 sm:px-10">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                    <div className='flex items-center gap-4'>
                        <img src="/assets/logo.png" alt="logo" className='w-[56px] h-[56px] sm:w-[65px] sm:h-[65px]' />
                        <h1 className="font-montserrat leading-[58px] text-[#1E1E1E] flex gap-1 font-bold whitespace-nowrap tracking-[1px] text-[36px] sm:text-[48px]">
                            M<span className='font-normal text-[#545454]'>umair</span>
                        </h1>
                    </div>
                    <div className="xl:hidden">
                        {openMenuIcon ? (
                            <CloseIcon setOpenMenuIcon={setOpenMenuIcon} />
                        ) : (
                            <MenuIcon setOpenMenuIcon={setOpenMenuIcon} />
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="hidden xl:block">
                        <div className="flex items-center space-x-8">
                            {navigation.map((item, key) =>
                            (
                                <li
                                    key={key}
                                    className="list-none rounded-md p-0.5 transition duration-300"
                                >
                                    <a href={item.target} className='text-[21px] leading-8 cursor-pointer whitespace-nowrap transition duration-300 hover:text-[#FD6F00]'>{item.Name}</a>
                                </li>
                            )
                            )}
                            <li
                                className="list-none hidden 2xl:block rounded-md p-0.5"
                            >
                                <button className='rounded-[5px] w-[188px] transition duration-300 h-14 bg-[#FD6F00] hover:bg-[#ff8b32f3] text-[21px] leading-8 text-white'>Download CV</button>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${openMenuIcon ? "translate-y-0" : "-translate-y-full"} transition duration-300 space-y-6 px-4 text-[21px] flex flex-col  items-start sm:items-center py-4 w-full xl:hidden z-[1000] bg-[#FD6F00] fixed left-0 right-0 top-0`}>
                {navigation.map((item, key) =>
                (
                    <li
                        key={key}
                        className="list-none cursor-pointer rounded-md transition duration-300 text-white hover:text-gray-200"

                    >
                        <a href={item.target}>{item.Name}</a>
                    </li>
                )
                )}
                <span className='absolute right-4 top-0'>
                    <CloseIcon setOpenMenuIcon={setOpenMenuIcon} />
                </span>
            </div>
        </nav>
    )
}

export default Navbar