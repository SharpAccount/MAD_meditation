import OnBoarding from "../ui/pages/OnBoarding";
import {LoginPage} from "../ui/pages/LoginPage";
import RegisterPage from "../ui/pages/RegisterPage";
import { Router } from "../ui/pages/Router";

export const routes = [
    {
        name:"OnBoarding",
        page: OnBoarding
    },
    {
        name:"Login",
        page: LoginPage
    },
    {
        name:"Register",
        page: RegisterPage
    },
    {
        name: "Router",
        page: Router,
    }
]