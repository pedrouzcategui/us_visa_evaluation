type GridProps = React.HTMLAttributes<HTMLDivElement> & {
    numberOfColumns: number;
    numberOfRows?: number;
    children: React.ReactNode;
}

type ColumnProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

export default function Grid({ numberOfColumns, numberOfRows = 1, children, ...props }: GridProps) {
    return (
        <div className={`grid gap-8 grid-cols-1 md:grid-cols-${numberOfColumns} grid-rows-${numberOfRows} ${props.className ?? ""}`}>
            {children}
        </div>
    )
}

function Column({ children, ...props }: ColumnProps) {
    return (
        <div className={`col ${props.className ?? ''}`}>
            {children}
        </div>
    )
}
Grid.Column = Column;