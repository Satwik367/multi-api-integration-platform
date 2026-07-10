import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                {children}

            </div>

        </div>

    );

}

export default MainLayout;