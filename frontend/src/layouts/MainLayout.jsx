import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {

    return (

        <div className="flex min-h-screen bg-transparent text-white">

            <Sidebar />

            <div className="flex flex-1 flex-col">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-10">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default MainLayout;