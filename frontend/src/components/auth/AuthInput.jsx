import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="group flex items-center rounded-xl border border-slate-700 bg-slate-800/70 transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/30">
        {/* Left Icon */}

        <div className="pl-4 text-slate-400">
          {icon}
        </div>

        {/* Input */}

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-500 outline-none"
        />

        {/* Password Toggle */}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="pr-4 text-slate-400 transition hover:text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthInput;