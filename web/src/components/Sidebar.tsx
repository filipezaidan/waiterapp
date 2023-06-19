import { NavItem } from "./NavItem";

const Menus = () => {
    return (
        <nav className="flex w-full flex-col items-center justify-center gap-12">
            <NavItem href="/" title="Home" icon="home" />
            <NavItem href="/orders" title="Histórico" icon="order" />
            <NavItem href="/menu" title="Cardápio" icon="menu" />
            <NavItem href="/users" title="Usuários" icon="users" />
        </nav>
    );
};

const ControlUser = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4">
            <NavItem href="/profile" title="Meu perfil" icon="profile" />
            <NavItem href="#" title="Sair" icon="logout" />
        </div>
    );
};

export const Sidebar = () => {
    return (
        <aside className="flex flex-col h-screen w-28 bg-white items-center justify-between py-10">
            {/* TODO: change this logo */}
            <span className="text-2xl font-semibold">WR</span>
            <Menus />
            <ControlUser />
        </aside>
    );
};
