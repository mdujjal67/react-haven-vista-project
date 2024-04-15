import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;