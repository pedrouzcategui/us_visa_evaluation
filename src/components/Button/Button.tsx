type ButtonProps = {
    type: 'primary' | 'secondary' | 'default';
    children: React.ReactNode;
}
export default function Button({ children, type = 'default' }: ButtonProps) {
    let classNameString = getClassNameStringByType(type);
    return (
        <button className={`py-3 px-5 ${classNameString}`}>
            {children}
        </button>
    )
}
function getClassNameStringByType(type: string): string {
    let classNameString;
    switch (type) {
        case 'primary':
            classNameString = 'bg-red-600 text-white text-lg'
            break;
        case 'secondary':
            classNameString = 'bg-blue-600 text-white text-md'
            break;
        default:
            classNameString = 'text-md'
            break;
    }
    return classNameString;
}
