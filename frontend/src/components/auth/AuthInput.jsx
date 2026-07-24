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
      <label className="mb-2 block text-sm font-medium text-[var(--color-ink-muted)]">
        {label}
      </label>

      <div className="group flex items-center rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] transition-colors duration-200 focus-within:border-[var(--color-signal-indigo)]">
        {/* Left Icon */}

        <div className="pl-4 text-[var(--color-ink-faint)]">
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
          className="w-full bg-transparent px-4 py-3.5 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none"
        />

        {/* Password Toggle */}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="pr-4 text-[var(--color-ink-faint)] transition hover:text-[var(--color-ink)]"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthInput;