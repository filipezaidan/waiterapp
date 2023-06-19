import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage } from "pages/Login";
import { HomePage } from "pages/Home";
import { LayoutDashboard } from "layout";

export const Routes = () => {
    return (
        <Switch>
            <Route element={<LayoutDashboard />}>
                <Route path="/" element={<HomePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Switch>
    );
};
