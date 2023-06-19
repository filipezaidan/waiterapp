import { Card, CardHeader } from "components/Card";
import HomeIcon from "assets/icons/home.svg";
import RefreshIcon from "assets/icons/refresh.svg";

const Header = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between">
                <div className="flex item-center gap-3">
                    <img src={HomeIcon} className="w-8 h-8 " />
                    <span className="text-2xl font-semibold">Home</span>
                </div>
                <div className="flex item-center justify-start gap-3 text-red-500 text-base font-semibold cursor-pointer">
                    <img src={RefreshIcon} className="w-6 h-6" />
                    <span>Reniciar o dia</span>
                </div>
            </div>
            <span className="text-base font-base font-semibold text-gray-500">
                Acompanhe os pedidos dos clientes
            </span>
        </div>
    );
};

export const HomePage = () => {
    return (
        <div className="flex flex-col flex-1 gap-12">
            <Header />

            <div className="flex gap-12">
                <Card>
                    <CardHeader title="Fila de espera" icon="🕑" />
                </Card>
                <Card>
                    <CardHeader title="Em produção" icon="👩‍🍳" />
                </Card>
                <Card>
                    <CardHeader title="Pronto" icon="✅" />
                </Card>
            </div>
        </div>
    );
};
