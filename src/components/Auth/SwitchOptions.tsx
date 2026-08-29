import React from "react";

const SwitchOptions = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean;
  setIsPassword: (value: boolean) => void;
}) => {
  return (
    <div className="mx-auto mb-12.5 mt-9 flex flex-col items-center justify-center gap-2.5 rounded-lg border border-white/[0.12] p-2 md:flex-row">
      <button
        className={`hover:text-primary w-full rounded-lg px-6 py-3 text-base outline-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-white/25 hover:text-white
        ${!isPassword ? "border-white/[0.12] bg-white/25 text-white" : "bg-white/5"}`}
        onClick={() => setIsPassword(false)}
      >
        Magic Link
      </button>
      <button
        className={`hover:text-primary w-full rounded-lg  px-6 py-3 text-base outline-hidden transition-all duration-300 hover:border-white/[0.12] hover:bg-white/25 hover:text-white ${
          isPassword
            ? " border-white/[0.12] bg-white/25 text-white"
            : "bg-white/5"
        }`}
        onClick={() => setIsPassword(true)}
      >
        Password
      </button>
    </div>
  );
};

export default SwitchOptions;
