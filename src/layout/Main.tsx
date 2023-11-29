import { Outlet } from "react-router-dom"
import { ReactDiv } from "../shared/components"

export const Main = () => {
  return (
    <ReactDiv style={`col-span-2 row-span-2 md:col-start-2 md:col-end-2 bg-gray-700 h-auto p-3 md:p-5`}>
        <Outlet />
    </ReactDiv>
  )
}
