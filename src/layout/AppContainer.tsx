import { useContext } from "react";
import { ReactDiv } from "../shared/components"
import { ChildrenType } from "../shared/types/ChildrenType"
import { SideBarContext } from "../shared/contexts/sidebar/SideBarContext";

export const AppContainer: React.FC<ChildrenType> = ({children}) => {
  const context = useContext(SideBarContext);

  return (
    <ReactDiv style={`grid grid-rows-[60px_calc(100vh-60px)] grid-cols-[100vw] ${context?.isExpanded ? 'md:grid-cols-[160px_calc(100vw-160px)]' : 'md:grid-cols-[80px_calc(100vw-80px)]'} bg-gray-900`}>
        {children}
    </ReactDiv>
  )
}
