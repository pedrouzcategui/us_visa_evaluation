type HeadingProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: string;
    className?: string;
}

export default function Heading({ level, children, className }: HeadingProps) {
    switch (level) {
        case 1:
            return <h1 className={`text-6xl ${className}`}>{children}</h1>
        case 2:
            return <h2 className={`text-4xl ${className}`}>{children}</h2>
        case 3:
            return <h3 className={`text-2xl ${className}`}>{children}</h3>
        case 4:
            return <h4 className={`text-lg ${className}`}>{children}</h4>
        case 5:
            return <h5 className={`text-md ${className}`}>{children}</h5>
        default:
            return <h6 className={`text-md ${className}`}>{children}</h6>
    }
}