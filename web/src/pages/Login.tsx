import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../components/Button";
import { InputForm } from "../components/Input";
import { IFormInput } from "../@types/Login";

const Header = () => {
    return (
        <div className="flex font-medium flex-col gap-1 items-center ">
            <span className="text-gray-500 text-base">Bem-vindo(a) ao</span>
            <div>
                <span className="text-4xl font-bold">WAITER</span>
                <span className="text-4xl font-light">APP</span>
            </div>
        </div>
    );
};

const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-96 h-auto items-center justify-center"
        >
            <div className="flex flex-col w-96 gap-8">
                <InputForm
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Seu e-mail de acesso"
                    register={register}
                />
                <InputForm
                    name="password"
                    label="Senha"
                    placeholder="Inform sua senha"
                    register={register}
                />
                <Button type="submit">Login</Button>
            </div>
        </form>
    );
};

export const LoginPage = () => {
    return (
        <div className="flex flex-col h-screen items-center justify-center ">
            <Header />
            <Form />
        </div>
    );
};
