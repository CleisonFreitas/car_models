import { useContext, useState } from "react";
import { ReactDiv, SideBar } from "../shared/components"
import { LuShrink } from "react-icons/lu";
import { FaExpandArrowsAlt, FaRegUser } from "react-icons/fa";
import { SideBarContext } from "../shared/contexts/sidebar/SideBarContext";
import { TbMenuOrder } from "react-icons/tb";

export const Header = () => {
    const context = useContext(SideBarContext);
    const [doLogout, setDoLogout] = useState<boolean>(false);
    const [hideMenu, setHideMenu] = useState<boolean>(false);

    const showLogout = () => {
        setDoLogout((prev) => !prev);
    }
    const modifyBar = () => {
        context?.expand();
    }
    const handleMenu = () => {
        setHideMenu((prev) => !prev);
    }
    return (
        <>
            <ReactDiv style={`absolute transition delay-125 ease-in-out ${hideMenu ? '' : '-translate-y-48 md:-translate-y-0'} duration-1000 transform md:static w-full md:flex md:row-span-2 md:col-span-1 bg-gray-900 text-white overflow-x-auto`}>
                <h3 className="text-center font-bold text-2xl italic mt-4 md:hidden">Car Analytics</h3>
                <SideBar />
            </ReactDiv>
            <ReactDiv style={`text-white shadow-md shadow-gray-700 border-4 border-gray-800 bg-gray-800 col-span-2 md:col-start-2 md:col-end-2 flex ${hideMenu ? 'justify-end' : 'justify-between'}  items-center px-1`}>
                <button
                    className="p-2 rounded-full border border-white text-white hidden md:block"
                    onClick={modifyBar}
                >
                    {context?.isExpanded == true ? <LuShrink /> : <FaExpandArrowsAlt />}
                </button>
                <button
                    className={`transition delay-125 ease-in-out ${hideMenu ? 'left-2 translate-y-40 absolute bg-white bg-opacity-80 text-blue-950' : ''} duration-1000 transform p-2 rounded-full border border-white text-white block md:hidden`}
                    onClick={handleMenu}
                >
                    {<TbMenuOrder />}
                </button>
                <ReactDiv
                    onClick={showLogout}
                    style="flex items-center gap-2 cursor-pointer hover:bg-white hover:bg-opacity-40 transition duration-700 delay-125 p-2 rounded-full">
                    <button
                        className="p-2 rounded-full border border-white text-white flex gap-2 items-center">
                        <FaRegUser />
                    </button>
                    <p>Cleison Freitas</p>
                </ReactDiv>
                {doLogout &&
                    <ReactDiv style="absolute right-1 top-12 h-14 w-40 bg-white text-black bg-opacity-30 rounded border border-gray-400 flex flex-col justify-center items-center flex-none">
                        <span className="cursor-pointer hover:bg-blue-950 w-full text-center hover:text-white">Logout</span>
                    </ReactDiv>
                }
            </ReactDiv>
        </>

    )
}
