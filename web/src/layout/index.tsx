import { Sidebar } from "components/Sidebar";
import { Outlet } from "react-router-dom";

export const LayoutDashboard = () => {
    return (
        <div className="flex flex-1">
            <Sidebar />
            <div className="flex flex-1 bg-zinc-100 p-10">
                <Outlet />
            </div>
        </div>
    );
};
