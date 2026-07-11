import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        name: "",

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

            await registerUser(form);

            toast.success("Registration Successful");

            navigate("/login");

        }

        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Registration Failed"

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

                    Register

                </h1>

                <input

                    name="name"

                    placeholder="Name"

                    className="w-full border p-3 rounded mb-4"

                    onChange={handleChange}

                />

                <input

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

                    className="w-full bg-green-600 text-white p-3 rounded"

                >

                    Register

                </button>

                <p className="mt-4 text-center">

                    Already have an account?

                    <Link

                        className="text-blue-600 ml-2"

                        to="/login"

                    >

                        Login

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Register;