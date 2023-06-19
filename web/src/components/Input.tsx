import { FieldValues, UseFormRegister } from "react-hook-form";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
            <div className="relative">
                <input
                    type={type}
                    className="w-full p-4 rounded-lg border border-gray-200 "
                    placeholder={placeholder}
                    required
                    {...register(name)}
                />
                {/* TODO: implement icon "eye" when the input is password type */}
                {/* {type === "password" && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <AiOutlineEye size={30} color="#666666" />
                    </div>
                )} */}
            </div>
        </div>
    );
};
