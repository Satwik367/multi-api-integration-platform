import { useNavigate } from "react-router-dom";

import {
    FaUserCircle,
    FaSignOutAlt,
    FaBell
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function DashboardHeader() {

    const navigate = useNavigate();

    const { user, setUser } = useAuth();

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

        navigate("/login");

    };

    return (

        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-[var(--color-hairline)] bg-[var(--color-base)]/80 px-8 backdrop-blur-xl">

            <div>

                <h1 className="font-display text-2xl font-semibold text-[var(--color-ink)]">

                    Welcome back

                </h1>

                <p className="mt-0.5 text-sm text-[var(--color-ink-muted)]">

                    Manage your APIs from one intelligent dashboard.

                </p>

            </div>

            <div className="flex items-center gap-5">

                <button

                    className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3 text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)]"

                >

                    <FaBell size={14} />

                </button>

                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-2">

                    <FaUserCircle

                        className="text-3xl text-[var(--color-signal-indigo)]"

                    />

                    <div>

                        <p className="text-sm font-medium text-[var(--color-ink)]">

                            {user?.name || "User"}

                        </p>

                        <p className="text-xs text-[var(--color-ink-muted)]">

                            {user?.email}

                        </p>

                    </div>

                </div>

                <button

                    onClick={logout}

                    className="flex items-center gap-2 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-ink-muted)] transition duration-200 hover:border-[var(--color-signal-coral)]/40 hover:text-[var(--color-signal-coral)]"

                >

                    <FaSignOutAlt size={13} />

                    Logout

                </button>

            </div>

        </header>

    );

}

export default DashboardHeader;