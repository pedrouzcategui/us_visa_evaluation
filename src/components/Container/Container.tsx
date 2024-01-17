type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}
export default function Container({ children, ...props }: ContainerProps) {
    return (
        <div className={`w-4/5 mx-auto py-5 ${props.className ?? ''}`}>
            {children}
        </div>
    )
}
