interface IButton {
    children: React.ReactNode;
}

export const Button = ({ children }: IButton) => {
    return (
        <button className="bg-red-600 p-3 text-white rounded-3xl w-full">
            <span className=" font-bold text-base">{children}</span>
        </button>
    );
};
