import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data = await registerUser({

                name,

                email,

                password

            });

            localStorage.setItem(

                "token",

                data.token

            );

            localStorage.setItem(

                "user",

                JSON.stringify(data.user)

            );

            setUser(data.user);

            navigate("/dashboard");

        }

        catch (err) {

            console.log(err);

            alert(

                err.response?.data?.message ||

                "Registration Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-slate-100 to-indigo-100">

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold">

                        APIFlow AI

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Create your account

                    </p>

                </div>

                <form onSubmit={submitHandler}>

                    <input

                        className="border rounded-lg p-3 w-full mb-5"

                        placeholder="Full Name"

                        value={name}

                        onChange={(e)=>setName(e.target.value)}

                    />

                    <input

                        className="border rounded-lg p-3 w-full mb-5"

                        type="email"

                        placeholder="Email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                    <input

                        className="border rounded-lg p-3 w-full mb-6"

                        type="password"

                        placeholder="Password"

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                    />

                    <button

                        disabled={loading}

                        className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-3 rounded-lg"

                    >

                        {

                            loading

                            ?

                            "Creating Account..."

                            :

                            "Register"

                        }

                    </button>

                </form>

                <p className="text-center mt-6">

                    Already have an account?

                    <Link

                        to="/login"

                        className="text-blue-600 ml-2"

                    >

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;