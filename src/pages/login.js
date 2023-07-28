import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";

const LoginPage = () => {
    const router = useRouter();
    const { callbackUrl } = router.query;

    return (
        <div className="hero min-h-screen max-w-7xl p-6 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Join Us!</h1>
                    <p className="py-6">Login/create an account and start building your next pc on our platform.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input disabled type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input disabled type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 gap-6">
                            <button disabled className="btn btn-primary">Login</button>
                            <button onClick={() => signIn("github", {
                                callbackUrl: callbackUrl || "/"
                            })} className="btn btn-primary text-4xl"><AiFillGithub /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;