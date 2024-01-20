type GridProps = React.HTMLAttributes<HTMLDivElement> & {
    numberOfColumns: number;
    numberOfRows?: number;
    children: React.ReactNode;
}

type ColumnProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

export default function Grid({ numberOfColumns, numberOfRows = 1, children, ...props }: GridProps) {
    let grid_cols = getGridColsString(numberOfColumns);
    return (
        <div className={`${props.className ?? ""} grid ${grid_cols} grid-rows-${numberOfRows} gap-8`}>
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

function getGridColsString(n: number) {
    switch (n) {
        case 1:
            return 'grid-cols-1'
        case 2:
            return 'md:grid-cols-1 lg:grid-cols-2'
        case 3:
            return 'md:grid-cols-1 lg:grid-cols-3'
        case 4:
            return 'md:grid-cols-2 lg:grid-cols-4'
        case 5:
            return 'lg:grid-cols-5'
        case 6:
            return 'md:grid-cols-3 lg:grid-cols-6'
        default:
            return 'grid-cols-1'
    }

}

Grid.Column = Column;