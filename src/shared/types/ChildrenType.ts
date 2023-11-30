export type ChildrenType = {
    style?: string;
    onClick?:(event: React.MouseEvent<HTMLInputElement>) => void;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    onLoad?:() => void;
    onMouseOver?:() => void;
    onMouseOn?:() => void;
    children: React.ReactNode;
}