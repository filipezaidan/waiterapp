import { Routes as Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { SignupPage } from "../pages/Signup";

export const Routes = () => {
    return (
        <Switch>
            {/* TODO: path / from route login page temporaly */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Switch>
    );
};
