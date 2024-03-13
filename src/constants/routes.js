import OnBoarding from "../ui/pages/OnBoarding";
import {LoginPage} from "../ui/pages/LoginPage";
import RegisterPage from "../ui/pages/RegisterPage";
import {ProfilePage} from "../ui/pages/ProfilePage";
import {Main} from "../ui/pages/Main";
import Footer from "../ui/components/HOCs/Footer";

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
        name:"Profile",
        page: ProfilePage
    },
    {
        name:"Main",
        page: Main
    },
    {
        name: "Footer",
        page: Footer,
    }
]