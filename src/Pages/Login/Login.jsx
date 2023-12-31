import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            }).catch(error => setError(error.message))
    }

    return (
        <>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
                                <p className="ml-72" onClick={() => setShow(!show)}>
                                    {
                                        show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </p>
                            </div>
                            <p className="text-red-600">{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-400" type="submit" value="Login" />
                            </div>
                            <p><small>New Here? <Link to="/signup" className="text-blue-600 underline">Create an account</Link> </small></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;