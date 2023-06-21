import { HeaderPage } from "components/HeaderPage";
import { BiFoodMenu as MenuIcon } from "react-icons/bi";

export const MenuPage = () => {
    return (
        <>
            <HeaderPage
                title="Cardapios"
                description="assa"
                icon={<MenuIcon size={35} />}
            />
            <div></div>
        </>
    );
};
