type ContainerProps = {
    children: React.ReactNode
}
export default function Container({ children }: ContainerProps) {
    return (
        <div className="w-4/5 mx-auto py-5">
            {children}
        </div>
    )
}
