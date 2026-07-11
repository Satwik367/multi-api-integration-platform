import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [form, setForm] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await loginUser(form);

            localStorage.setItem("token", data.token);

            setUser(data.user);

            toast.success("Login Successful");

            navigate("/");

        }

        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <form

                onSubmit={handleSubmit}

                className="bg-white p-8 rounded-xl shadow-lg w-[400px]"

            >

                <h1 className="text-3xl font-bold mb-6 text-center">

                    Login

                </h1>

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    className="w-full border p-3 rounded mb-4"

                    onChange={handleChange}

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    className="w-full border p-3 rounded mb-4"

                    onChange={handleChange}

                />

                <button

                    className="w-full bg-blue-600 text-white p-3 rounded"

                >

                    Login

                </button>

                <p className="mt-4 text-center">

                    Don't have an account?

                    <Link

                        className="text-blue-600 ml-2"

                        to="/register"

                    >

                        Register

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Login;