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

            <div className="p-8">

                <h2 className="text-2xl font-bold">

                    Loading Profile...

                </h2>

            </div>

        );

    }

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">

                My Profile

            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">

                <div className="flex items-center gap-6">

                    <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">

                        {user.name.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h2 className="text-3xl font-bold">

                            {user.name}

                        </h2>

                        <p className="text-gray-500 text-lg">

                            {user.email}

                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-10">

                    <div className="bg-slate-100 rounded-lg p-5">

                        <p className="text-gray-500">

                            Name

                        </p>

                        <h3 className="text-xl font-semibold mt-2">

                            {user.name}

                        </h3>

                    </div>

                    <div className="bg-slate-100 rounded-lg p-5">

                        <p className="text-gray-500">

                            Email

                        </p>

                        <h3 className="text-xl font-semibold mt-2">

                            {user.email}

                        </h3>

                    </div>

                    <div className="bg-slate-100 rounded-lg p-5">

                        <p className="text-gray-500">

                            Status

                        </p>

                        <h3 className="text-xl font-semibold mt-2 text-green-600">

                            Active

                        </h3>

                    </div>

                    <div className="bg-slate-100 rounded-lg p-5">

                        <p className="text-gray-500">

                            Platform

                        </p>

                        <h3 className="text-xl font-semibold mt-2">

                            APIFlow AI

                        </h3>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;