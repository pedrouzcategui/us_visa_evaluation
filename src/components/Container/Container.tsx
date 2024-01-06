type ContainerProps = {
    children: React.ReactNode;
    extendedClassName?: string;
}
export default function Container({ children, extendedClassName }: ContainerProps) {
    return (
        <div className={`w-4/5 mx-auto py-5 ${extendedClassName}`}>
            {children}
        </div>
    )
}
