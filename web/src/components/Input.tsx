import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputForm {
    name: string;
    label: string;
    type?: React.HTMLInputTypeAttribute | undefined;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
}

export const InputForm = ({
    name,
    label,
    type = "text",
    placeholder,
    register,
}: InputForm) => {
    return (
        <div className="">
            <label className="block mb-2 text-base font-normal text-gray-900">
                {label}
            </label>
            {/* TODO: change border color */}
            <input
                type={type}
                className="w-full p-4 rounded-lg border border-gray-200 "
                placeholder={placeholder}
                required
                {...register(name)}
            />
        </div>
    );
};
