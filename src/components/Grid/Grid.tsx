type GridProps = {
    numberOfColumns: number;
    numberOfRows?: number;
    gap?: number;
    children: React.ReactNode;
}

type ColumnProps = {
    children: React.ReactNode;
}

export default function Grid({ numberOfColumns, numberOfRows = 1, gap = 1, children }: GridProps) {
    return (
        <div className={`grid gap-8 grid-cols-${numberOfColumns} grid-rows-${numberOfRows}`}>
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