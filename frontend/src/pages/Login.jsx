import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import Button from "../components/ui/Button";

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
        password,
      });

      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setUser(data.user);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue using APIFlow AI."
    >
      <form onSubmit={submitHandler}>
        <AuthInput
          label="Email"
          type="email"
          value={email}
          required
          icon={<FaEnvelope />}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          label="Password"
          type="password"
          value={password}
          required
          icon={<FaLock />}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mb-6 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-400">
            <input
              type="checkbox"
              className="rounded border-slate-600 bg-slate-800"
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-indigo-400 transition hover:text-indigo-300"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          loading={loading}
        >
          Sign In
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-400">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="mt-2 inline-block font-semibold text-indigo-400 transition hover:text-indigo-300"
        >
          Create Account →
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Login;