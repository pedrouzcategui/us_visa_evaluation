type GridProps = {
    numberOfColumns: number;
    gap?: number;
    children: React.ReactNode;
}

type ColumnProps = {
    children: React.ReactNode;
}

export default function Grid({ numberOfColumns, gap = 1, children }: GridProps) {
    return (
        <div className={`grid gap-8 grid-cols-${numberOfColumns}`}>
            {children}
        </div>
    )
}

function Column({ children }: ColumnProps) {
    return (
        <div className="col">
            {children}
        </div>
    )
}
Grid.Column = Column;