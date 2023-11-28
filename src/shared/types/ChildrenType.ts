export type ChildrenType = {
    style?: string;
    onClick?:(event: React.MouseEvent<HTMLInputElement>) => void;
    onLoad?:() => void;
    onMouseOver?:() => void;
    onMouseOn?:() => void;
    children: React.ReactNode;
}