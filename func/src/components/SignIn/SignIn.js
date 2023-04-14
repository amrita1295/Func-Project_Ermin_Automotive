import React from "react";
import "./SignIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import login1 from "../../assets/login-1.png";
import login2 from "../../assets/login-2.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import dot1 from "../../assets/login-dot-1.png";
import dot2 from "../../assets/login-dot-2.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
  const { signIn, signInWithGoogle, forgetPassword, signInWithFacebook } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userEmail, setUserEmail] = useState("");

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      toast.error("Please Enter Your Email Address");
      return;
    }
    forgetPassword(userEmail)
      .then(() => {
        toast.success("Password Reset Sent to Your Email Address");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully Logged in')
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.error('error', error)
        })
}


  const handleFacebook = () => {
    signInWithFacebook(facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully Logged in')
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.error('error', error)
        })
}

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
            <h2 className="text-4xl font-semibold text-center">SIGN IN</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="input input-bordered w-full "
                  placeholder="Enter Your Email"
                  onBlur={handleEmailBlur}
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
                <button
                  onClick={handleForgetPassword}
                  className="flex justify-start text-xs hover:underline text-gray-400 mt-2"
                >
                  Forgot password?
                </button>
              </div>

              <div className="flex justify-center">
                <input
                  className="btn my-5 bg-[#FD8C69] text-black hover:bg-[#c46a4f] hover:text-white border-none w-64"
                  value="Sign In"
                  type="submit"
                />
              </div>
              <div>
                {loginError && (
                  <p className="text-red-500 text-center mb-5">{loginError}</p>
                )}
              </div>
            </form>
            <p className="text-center">
              New to <span className="font-semibold">XTRALIVING</span>?{" "}
              <Link to="/register">
                <span className="text-[#FD8C69] font-semibold">
                  Register Now
                </span>
              </Link>
            </p>
            <div className="divider">OR SIGN IN WITH</div>

            <div className="flex justify-center gap-8">
              <button onClick={handleGoogleSignIn} className="">
                <img src={google} alt="" />
              </button>
              <button onClick={handleFacebook} className="">
                <img src={facebook} alt="" />
              </button>
            </div>
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

export default SignIn;