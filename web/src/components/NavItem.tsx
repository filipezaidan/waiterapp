import { Link, useLocation } from "react-router-dom";
import HomeIcon from "assets/icons/home.svg";
import { ReactComponent as IconTeste } from "assets/icons/home.svg";
import OrderIcon from "assets/icons/order.svg";
import MenuIcon from "assets/icons/menu.svg";
import UsersIcon from "assets/icons/users.svg";
import ProfileIcon from "assets/icons/profile.svg";
import LogoutIcon from "assets/icons/log-off.svg";

const icons = {
    default: HomeIcon,
    home: HomeIcon,
    order: OrderIcon,
    menu: MenuIcon,
    users: UsersIcon,
    profile: ProfileIcon,
    logout: LogoutIcon,
};

console.log;

interface INavItem {
    title: string;
    href: string;
    icon: string;
}

export const NavItem = ({ title, href, icon = "default" }: INavItem) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isSelected = currentPath === href;

    console.log({ currentPath });
    return (
        <Link
            to={href}
            className={`flex flex-col items-center gap-2 ${
                isSelected ? "text-red-600" : "text-gray-400"
            }`}
        >
            {/* TODO: change color icon outline */}
            <img src={icons[icon]} />
            <a href={href}>{title}</a>
        </Link>
    );
};
