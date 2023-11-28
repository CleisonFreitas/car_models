import { ChildrenType } from "../../types/ChildrenType"

export const ReactDiv: React.FC<ChildrenType> = (
    { 
        style,
        onClick,
        onLoad,
        onMouseOver,
        onMouseOn,
        children
    }) => {
    return (
        <div
            className={style}
            onClick={onClick}
            onLoad={onLoad}
            onMouseOver={onMouseOver}
            onMouseUp={onMouseOn}
        >
            {children}
        </div>
    )
}
