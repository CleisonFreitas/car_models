import {  useState } from "react"
import { ChildrenType } from "../../types/ChildrenType"

export const MenuButton: React.FC<ChildrenType> = ({ children }) => {

  const [instance,setInstance] = useState<string>('');
  const handleClick = () => {
    setInstance('scale-0');
    setTimeout(() => {
      setInstance('scale-100');
    },200);
  }
  return (
    <button
      onClick={handleClick}
      className={`w-full p-4 flex justify-center md:justify-start gap-2 items-center font-bold transition ease-in-out delay-75 hover:bg-gray-500 hover:border-r-4 ${instance} transform duration-700 `}>
      {children}
    </button>
  )
}
