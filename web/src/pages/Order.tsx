import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableTD,
} from "components/Table";

import { TbReceipt as OrderIcon } from "react-icons/tb";
import { FiEye as EyeIcon } from "react-icons/fi";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";

const Header = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between">
                <div className="flex item-center gap-2">
                    {/* <img src={OrderIcon} className="w-8 h-8 " /> */}
                    <OrderIcon color="#5e636e" size={35} />
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
        <div className="flex flex-col gap-4">
            <div className="flex w-full items-center gap-2">
                <h5 className="text-gray-600 font-semibold text-base ">
                    Pedidos
                </h5>
                <div className="px-2 py-1 bg-neutral-200 rounded">
                    <span>1</span>
                </div>
            </div>
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
                            <TableTD className="w-36 ">
                                <div className="flex gap-2 justify-around">
                                    <button className="">
                                        <EyeIcon size={20} />
                                    </button>
                                    <button>
                                        <DeleteIcon color="#D73035" size={20} />
                                    </button>
                                </div>
                            </TableTD>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export const OrderPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-12">
            <Header />
            <TableOrders />
        </div>
    );
};
