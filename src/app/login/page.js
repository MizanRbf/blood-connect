import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import Link from "next/link";
import { ImCross } from "react-icons/im";

const Login = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-black">
        <div className="bg-secondary rounded-lg p-6 shadow-md max-w-lg">
          <div className="flex justify-end mb-5">
            <Link
              href="/"
              className="text-white  hover:bg-[#00000046] px-4 py-2 rounded-xs"
            >
              <ImCross />
            </Link>
          </div>
          <LoginForm></LoginForm>
          <p className="text-white mt-4">
            Do not have an account? Please{" "}
            <Link href="/register" className="font-bold underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
