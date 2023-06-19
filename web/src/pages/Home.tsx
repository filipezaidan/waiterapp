import { Sidebar } from "../components/Sidebar";

export const HomePage = () => {
    return (
        <div className="flex flex-1">
            <Sidebar />
            <div className="flex flex-1 bg-zinc-100"></div>
        </div>
    );
};
