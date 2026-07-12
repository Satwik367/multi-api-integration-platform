import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data = await loginUser({

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

                "Login Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">

                <h1 className="text-4xl font-bold text-center mb-8">

                    Login

                </h1>

                <form onSubmit={submitHandler}>

                    <input

                        className="border rounded-lg p-3 w-full mb-5"

                        placeholder="Email"

                        type="email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                    <input

                        className="border rounded-lg p-3 w-full mb-6"

                        placeholder="Password"

                        type="password"

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                    />

                    <button

                        type="submit"

                        disabled={loading}

                        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg"

                    >

                        {

                            loading

                            ?

                            "Logging In..."

                            :

                            "Login"

                        }

                    </button>

                </form>

                <p className="text-center mt-6">

                    Don't have an account?

                    <Link

                        to="/register"

                        className="text-blue-600 ml-2"

                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;