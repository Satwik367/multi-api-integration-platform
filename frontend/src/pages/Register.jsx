import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import { registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import Button from "../components/ui/Button";

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
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Join APIFlow AI and start building workflows."
    >
      <form onSubmit={submitHandler}>
        <AuthInput
          label="Full Name"
          value={name}
          required
          icon={<FaUser />}
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
        />

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
          placeholder="Create a password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          loading={loading}
        >
          Create Account
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-400">
          Already have an account?
        </p>

        <Link
          to="/login"
          className="mt-2 inline-block font-semibold text-indigo-400 hover:text-indigo-300 transition"
        >
          Sign In →
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Register;