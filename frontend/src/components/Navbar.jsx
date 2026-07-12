import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

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

        <header className="h-16 bg-white shadow-md border-b flex items-center justify-between px-8">

            <div>

                <h1 className="text-2xl font-bold text-slate-800">

                    APIFlow AI

                </h1>

                <p className="text-sm text-gray-500">

                    Multi API Integration Platform

                </p>

            </div>

            <div className="flex items-center gap-6">

                <div className="flex items-center gap-3">

                    <FaUserCircle

                        className="text-4xl text-blue-600"

                    />

                    <div>

                        <p className="font-semibold">

                            {user?.name || "User"}

                        </p>

                        <p className="text-sm text-gray-500">

                            {user?.email}

                        </p>

                    </div>

                </div>

                <button

                    onClick={logout}

                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg"

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </header>

    );

}

export default Navbar;