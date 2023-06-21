interface ITable {
    children: React.ReactNode;
}

interface ITableHead {
    columns: string[];
}

type ITableRow = ITable;

type ITableBody = ITable;

export const Table = ({ children }: ITable) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {children}
            </table>
        </div>
    );
};

export const TableHead = ({ columns }: ITableHead) => {
    return (
        <thead className="h-12 text-gray-500 bg-neutral-200">
            <tr>
                {columns.map((column, index) => (
                    <th key={index} scope="col" className="px-4 py-3">
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export const TableRow = ({ children }: ITableRow) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {children}
        </tr>
    );
};

export const TableTD = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string | undefined;
}) => {
    return <td className={`px-4 py-3 ${className}`}>{children}</td>;
};

export const TableBody = ({ children }: ITableBody) => {
    return <tbody>{children}</tbody>;
};
