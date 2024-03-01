import Header from "./HOCs/Header";
import Footer from "./HOCs/Footer";

const Layout = ({ children  }) => {
    return (
        <>
            <Header/>
            { children }
            <Footer/>
        </>
    )
}
export default Layout;