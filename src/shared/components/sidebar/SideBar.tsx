import { useContext } from "react";
import { MenuButton, ReactDiv } from "..";
import Logo from '../../../assets/logo-removebg-preview.png';
import { FaHome, FaSearch } from "react-icons/fa";
import { SideBarContext } from "../../contexts/sidebar/SideBarContext";

const menuItems = [
    {
        name: 'Home',
        icon: <FaHome size={18} />
    },
    {
        name: 'Pesquisar',
        icon: <FaSearch size={18} />
    }
]
export const SideBar = () => {
    const context = useContext(SideBarContext);
    return (
        <>
            <ReactDiv style={`grid grid-rows-[30px_calc(100%-30px)] md:grid-rows-[150px_calc(100%-150px)]`}>
                <figure className={`m-4 ${context?.isExpanded ? 'w-auto h-auto' : 'w-10 h-10'}  rounded-full row-start-1 row-end-1 box-border shadow-md shadow-gray-400 hidden md:flex justify-center items-center`}>
                    <img src={Logo} alt="logo" className={`${context?.isExpanded ? 'h-[120px] w-[120px]' : 'h-[40px] w-[40px]'}  row-start-1 row-end-1 rounded-full`} />
                </figure>
                <ReactDiv style={`row-start-2 row-end-2 col-span-1 flex flex-col justify-start items-center md:border-l-4 border-b-4 md:border-b-0 border-white h-auto`}>
                    {menuItems.map((menu) => <MenuButton key={menu.name}>{menu.icon} {context?.isExpanded ? menu.name : ''}</MenuButton>)}
                </ReactDiv>
            </ReactDiv>
        </>
    )
}
