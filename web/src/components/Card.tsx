interface ICard {
    children: React.ReactNode;
}
interface ICardHeader {
    title: string;
    icon: string;
}

export const CardHeader = ({ icon, title }: ICardHeader) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="text-xl">{icon}</span>
            <span className="text-xl font-semibold">{title}</span>
            <div className="py-1 px-2 text-lg bg-zinc-200 rounded">1</div>
        </div>
    );
};

export const Card = ({ children }: ICard) => {
    return (
        <div className="flex flex-col items-center border bg-zinc-100 w-96 p-4 gap-6 h-auto border-gray-200 rounded-lg">
            {children}
            <div className="flex border w-full h-28 p-10 bg-zinc-50 rounded "></div>
        </div>
    );
};
