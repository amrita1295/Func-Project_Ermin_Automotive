import React from "react";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login1 from "../../assets/login-1.png";
import login2 from "../../assets/login-2.png";
import dot1 from "../../assets/login-dot-1.png";
import dot2 from "../../assets/login-dot-2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const location = useLocation();

  const navigate = useNavigate()
  const from = location.state?.from.pathname || '/'


  const handleRegister = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully')
        navigate(from, {replace: true})
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = () => {};

  const saveUSer = (name, email, role) => {};

  return (
    <div className="pt-24 login-bg">
      <Toaster></Toaster>
      <div className="flex justify-between">
        <div className="ml-10 mt-[-25px] mb-[-80px]">
          <img src={dot1} alt="" className="w-20" />
        </div>
        <div className="ml-10 mt-[-25px] mb-[-80px]">
          <img src={dot2} alt="" className="h-16" />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/0MfSMVS/float-2.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "40% 32%",
        }}
      >
        <div className="h-[600px] flex justify-center items-center px-6 ">
          <div className="w-[600px] p-5 border bg-white rounded-3xl">
            <h2 className="text-4xl font-semibold text-center">REGISTER</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full "
                  placeholder="Enter Your Name"
                />
                {errors.email && (
                  <p className="text-red-500" role="alert">
                    {errors.name?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="input input-bordered w-full "
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <p className="text-red-500" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "password must be atleast 6 digit",
                    },
                  })}
                  className="input input-bordered w-full "
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <input
                  className="btn my-5 bg-[#FD8C69] text-black hover:bg-[#c46a4f] hover:text-white border-none w-64"
                  value="Sign In"
                  type="submit"
                />
              </div>

              {signUpError && (
                <p className="text-red-500 text-center mb-5">{signUpError}</p>
              )}
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#FD8C69] font-semibold">Sign In</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex justify-between lg:mt-[-400px] mt-[-80px]">
          <img src={login1} alt="" className="w-40 lg:w-80" />
          <img src={login2} alt="" className=" w-40 lg:w-80" />
        </div>
      </div>
    </div>
  );
};

export default Register;
