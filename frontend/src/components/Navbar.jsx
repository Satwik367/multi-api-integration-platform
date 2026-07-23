import { useNavigate } from "react-router-dom";

import {
    FaUserCircle,
    FaSignOutAlt,
    FaBell
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { user, setUser } = useAuth();

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

        navigate("/login");

    };

    return (

        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-slate-900/50 px-8 backdrop-blur-xl">

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Welcome Back 👋

                </h1>

                <p className="mt-1 text-slate-400">

                    Manage your APIs from one intelligent dashboard.

                </p>

            </div>

            <div className="flex items-center gap-6">

                <button

                    className="rounded-full bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700 hover:text-white"

                >

                    <FaBell />

                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/60 px-4 py-2">

                    <FaUserCircle

                        className="text-5xl text-indigo-400"

                    />

                    <div>

                        <p className="font-semibold text-white">

                            {user?.name || "User"}

                        </p>

                        <p className="text-sm text-slate-400">

                            {user?.email}

                        </p>

                    </div>

                </div>

                <button

                    onClick={logout}

                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-red-500/30"

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </header>

    );

}

export default Navbar;