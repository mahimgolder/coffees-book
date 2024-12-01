import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12  mt-28">
                <Outlet></Outlet>
            </div>  
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;