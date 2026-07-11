import { useNavigate } from "react-router-dom";

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

        <div className="h-16 bg-white shadow flex justify-between items-center px-6">

            <h1 className="font-bold text-xl">

                Multi API Platform

            </h1>

            <div className="flex items-center gap-4">

                <span>

                    {user?.name}

                </span>

                <button

                    onClick={logout}

                    className="bg-red-500 text-white px-4 py-2 rounded"

                >

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Navbar;