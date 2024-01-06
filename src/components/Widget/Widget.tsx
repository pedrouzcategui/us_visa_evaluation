type WidgetProps = {
    icon?: React.ReactNode;
    title: string;
    description: string;
    extendedClassName?: string;
}

export default function Widget({ icon = <></>, title, description, extendedClassName = '' }: WidgetProps) {
    return (
        <div className={`shadow-md p-8 ${extendedClassName}`}>
            <div className="flex items-center mb-4">
                <div className="mr-4">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                </div>
            </div>
            <p className="text-justify text-sm">{description}</p>
        </div>
    )
}
