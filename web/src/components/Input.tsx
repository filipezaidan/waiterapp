interface InputForm {
    label: string;
    type?: string;
    placeholder: string;
}

export const InputForm = ({ label, type = "text", placeholder }: InputForm) => {
    return (
        <div className="">
            <label className="block mb-2 text-base font-normal text-gray-900 dark:text-white">
                {label}
            </label>
            {/* TODO: change border color */}
            <input
                type={type}
                className="w-full p-4 rounded-lg border border-gray-200 "
                placeholder={placeholder}
                required
            />
        </div>
    );
};
