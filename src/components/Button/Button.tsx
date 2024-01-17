type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'black' | 'default';
    isVisible?: boolean
};

export default function Button({ children, variant = 'default', isVisible = true, ...props }: ButtonProps) {
    let classNameString = getClassNameStringByType(variant);
    if (isVisible) {
        return (
            <button {...props} className={`py-3 px-5 ${classNameString} ${props.className}`}>
                {children}
            </button>
        )
    }
}
function getClassNameStringByType(variant: string): string {
    let classNameString;
    switch (variant) {
        case 'primary':
            classNameString = 'bg-red-600 text-white text-lg'
            break;
        case 'secondary':
            classNameString = 'bg-blue-600 text-white text-md'
            break;
        case 'black':
            classNameString = 'bg-black text-white text-md'
            break;
        default:
            classNameString = 'text-md'
            break;
    }
    return classNameString;
}
