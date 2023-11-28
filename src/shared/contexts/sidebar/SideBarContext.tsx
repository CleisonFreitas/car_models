import { createContext, useCallback, useState } from "react";
import { SideBarContextType } from "../../types/SidebarContextType";
import { ChildrenType } from "../../types/ChildrenType";

export const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const SideBarData: React.FC<ChildrenType> = ({children}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    const expand = useCallback(()=>{
        setIsExpanded((prev) => !prev)
    },[]);


    return <SideBarContext.Provider value={{isExpanded,expand}}>{children}</SideBarContext.Provider>
}