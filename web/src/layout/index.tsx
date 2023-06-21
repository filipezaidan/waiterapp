import { Sidebar } from "components/Sidebar";
import { Outlet } from "react-router-dom";

export const LayoutDashboard = () => {
    return (
        <div className="flex flex-1">
            <Sidebar />
            <div className="flex flex-1 bg-zinc-100 py-10 pl-10 pr-20">
                <Outlet />
            </div>
        </div>
    );
};
