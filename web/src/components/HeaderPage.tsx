interface IHeaderPage {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const HeaderPage = ({ title, description, icon }: IHeaderPage) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full justify-between">
                <div className="flex item-center gap-3">
                    <div className="text-gray-800">{icon}</div>

                    <span className="text-2xl text-gray-800 font-semibold">
                        {title}
                    </span>
                </div>
                {/* <div className="flex item-center justify-start gap-3 text-red-500 text-base font-semibold cursor-pointer">
                    <img src={RefreshIcon} className="w-6 h-6" />
                    <span>Reniciar o dia</span>
                </div> */}
            </div>
            <span className="text-base font-base font-semibold text-gray-500">
                {description}
            </span>
        </div>
    );
};
