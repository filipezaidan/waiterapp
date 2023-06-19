import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { HomePage } from "../pages/Home";

export const Routes = () => {
    return (
        <Switch>
            {/* TODO: path / from route login page temporaly */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Switch>
    );
};
