import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableTD,
} from "components/Table";

const Header = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between">
                <div className="flex item-center gap-3">
                    {/* <img src={HomeIcon} className="w-8 h-8 " /> */}
                    <span className="text-2xl font-semibold">Histórico</span>
                </div>
            </div>
            <span className="text-base font-base font-semibold text-gray-500">
                Visualize os pedidos anteriores
            </span>
        </div>
    );
};

const TableOrders = () => {
    const columns = ["Mesa", "Data", "Nome", "Categoria", "Total", "Ações"];
    const data = [
        {
            table: "Mesa 1",
            date: "2023-06-21",
            name: "Cliente A",
            category: "Refeição",
            total: "R$50",
        },
        {
            table: "Mesa 2",
            date: "2023-06-21",
            name: "Cliente B",
            category: "Bebidas",
            total: "R$20",
        },
        {
            table: "Mesa 3",
            date: "2023-06-21",
            name: "Cliente C",
            category: "Sobremesa",
            total: "R$10",
        },
    ];
    return (
        <Table>
            <TableHead columns={columns} />
            <TableBody>
                {data.map((order) => (
                    <TableRow>
                        <TableTD>{order.table}</TableTD>
                        <TableTD>{order.date}</TableTD>
                        <TableTD>{order.name}</TableTD>
                        <TableTD>{order.category}</TableTD>
                        <TableTD>{order.total}</TableTD>
                        <TableTD>{/* actions in here */}</TableTD>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export const OrderPage = () => {
    return (
        <div className="flex flex-col flex-1 gap-12">
            <Header />
            <TableOrders />
        </div>
    );
};
