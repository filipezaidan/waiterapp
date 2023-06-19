import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage } from "pages/Login";
import { HomePage } from "pages/Home";
import { LayoutDashboard } from "layout";
import { OrderPage } from "pages/Order";
import { MenuPage } from "pages/Menu";
import { UsersPage } from "pages/Users";
import { ProfilePage } from "pages/Profile";

export const Routes = () => {
    return (
        <Switch>
            <Route element={<LayoutDashboard />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Switch>
    );
};
