interface IButton {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    enable?: boolean;
}

export const Button = ({
    children,
    type = "button",
    enable = true,
}: IButton) => {
    return (
        <button
            type={type}
            className={`${
                enable ? "bg-red-600" : "bg-gray-200 cursor-not-allowed"
            } py-2 text-white rounded-full w-full`}
        >
            <span className=" font-bold text-base">{children}</span>
        </button>
    );
};
