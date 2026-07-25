import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

function MainLayout({ children }) {

    return (

        <div className="flex min-h-screen bg-[var(--color-base)] text-[var(--color-ink)]">

            <Sidebar />

            <div className="flex flex-1 flex-col">

                <DashboardHeader />

                <main className="flex-1 overflow-y-auto p-12">

                    <div className="mx-auto max-w-7xl">

                        {children}

                    </div>

                </main>

            </div>

        </div>

    );

}

export default MainLayout;