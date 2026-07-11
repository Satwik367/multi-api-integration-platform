import {

    Link

} from "react-router-dom";

function Sidebar() {

    return (

        <div className="w-64 bg-slate-900 text-white min-h-screen">

            <div className="text-2xl font-bold p-6">

                API Hub

            </div>

            <nav className="flex flex-col">

                <Link className="p-4 hover:bg-slate-700" to="/">

                    Dashboard

                </Link>

                <Link className="p-4 hover:bg-slate-700" to="/marketplace">

                    API Marketplace

                </Link>

                <Link className="p-4 hover:bg-slate-700" to="/workflows">

                    Workflow Builder

                </Link>

                <Link className="p-4 hover:bg-slate-700" to="/executor/gemini">

                    Gemini AI

                </Link>

            </nav>

        </div>

    );

}

export default Sidebar;