type CustomButtonType = {
    type: "button" | "submit" | "reset"
    children: React.ReactNode;
    variant: "primary";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const variants = {
    primary: 'w-full border border-white rounded-lg p-3 text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:border-blue-900'
}
export const CustomButton: React.FC<CustomButtonType> = ({ children, type, variant, onClick }) => {
    const variantClass = variants[variant];
    return (
        <button
            type={type}
            className={variantClass}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
