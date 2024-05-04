import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser, googleLogin, twitterLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    Navigate(location?.state || "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        handleSocialLogin(googleLogin);
    };

    const handleTwitterLogin = () => {
        handleSocialLogin(twitterLogin);
    };

    const onSubmit = (data) => {  
        console.log(data);
        // create user
        createUser(data.email, data.password )
            .then((result) => {
                toast.success('Registration successful');
                if (result.user) {
                    Navigate(location?.state || "/");
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex gap-10">
            <div className="w-1/2 hidden lg:block">
                <img src="/public/images/login/login.svg" alt="" />
            </div>
            <div className="px-8 py-12 rounded-3xl border lg:w-1/2">
                <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
                    <input {...register("name", { required: true })} name="name" type="text" placeholder="Your Full Name" className="input input-bordered w-full" />
                    {errors.name && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your name</span>}
                    <input {...register("email", { required: true })} name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your email</span>}
                    <label className="input input-bordered flex items-center gap-2">
                        <input  {...register("password", { required: true })} name="password"
                         type={showPassword ? "text" : "password"}
                         placeholder="Your Password" className="grow" />
                         <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" aria-label="Toggle password visibility">
                            {showPassword ?  <FaRegEyeSlash  className=" text-2xl" /> : <FaRegEye className=" text-2xl" />}
                         </span>
                    </label>
                    {errors.password && <span className="text-sm text-red-500 font-medium -mt-4">Please enter your password</span>}
                    <button className="btn w-full bg-[#E7A500]">Sign Up</button>
                </form>
                <div className="mt-5 flex justify-center items-center">
                    <h5 className="text-lg font-bold">Already have an account? <Link className="text-[#E7A500]" to="/login">Sign In</Link></h5>
                </div>
                <div className="divider">Register With</div>
                <div className="flex gap-5 justify-center pt-4">
                    <button onClick={handleGoogleLogin}><img className="h-9 w-9 rounded-full" src="/public/images/google-icon.png" alt="Google" /></button>
                    <button onClick={handleTwitterLogin}><img className="h-9 w-9 rounded-full" src="/public/images/twitter-icon.png" alt="Twitter" /></button>
                </div>
            </div>
        </div>
    );
};

export default Register;
