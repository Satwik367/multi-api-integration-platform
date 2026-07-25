import { useEffect, useState } from "react";

function Profile() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = JSON.parse(

            localStorage.getItem("user")

        );

        if (storedUser) {

            setUser(storedUser);

        }

    }, []);

    if (!user) {

        return (

            <div>

                <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">

                    Loading profile...

                </h2>

            </div>

        );

    }

    return (

        <div>

            <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)] mb-8">

                My Profile

            </h1>

            <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-10 max-w-3xl">

                <div className="flex items-center gap-6">

                    <div className="w-20 h-20 rounded-full bg-[var(--color-signal-indigo-soft)] flex items-center justify-center text-[var(--color-signal-indigo)] text-3xl font-semibold">

                        {user.name.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">

                            {user.name}

                        </h2>

                        <p className="text-[var(--color-ink-muted)]">

                            {user.email}

                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-5 mt-10">

                    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-6">

                        <p className="text-xs text-[var(--color-ink-muted)]">

                            Name

                        </p>

                        <h3 className="mt-2 text-lg font-medium text-[var(--color-ink)]">

                            {user.name}

                        </h3>

                    </div>

                    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-6">

                        <p className="text-xs text-[var(--color-ink-muted)]">

                            Email

                        </p>

                        <h3 className="mt-2 text-lg font-medium text-[var(--color-ink)]">

                            {user.email}

                        </h3>

                    </div>

                    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-6">

                        <p className="text-xs text-[var(--color-ink-muted)]">

                            Status

                        </p>

                        <h3 className="mt-2 text-lg font-medium text-[var(--color-signal-mint)]">

                            Active

                        </h3>

                    </div>

                    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-6">

                        <p className="text-xs text-[var(--color-ink-muted)]">

                            Platform

                        </p>

                        <h3 className="mt-2 text-lg font-medium text-[var(--color-ink)]">

                            APIFlow AI

                        </h3>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;