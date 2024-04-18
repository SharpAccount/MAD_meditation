import OnBoarding from "../ui/pages/OnBoarding";
import {LoginPage} from "../ui/pages/LoginPage";
import RegisterPage from "../ui/pages/RegisterPage";
import TopNBottomTabs from "../ui/components/TopNBottomTabs";

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
        page: TopNBottomTabs,
    }
]