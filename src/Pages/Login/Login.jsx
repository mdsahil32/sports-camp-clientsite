import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from '../../assets/images/google.png'

const Login = () => {
    const [error, setError] = useState('')
    const {signIn,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        setError('')
        signIn(email, password) 
        .then(result =>{
            const logged = result.user
            console.log(logged);
            navigate('/')
        })
        .catch(err => setError(err.message))
    }
    const googleLogin = () =>{
        signInWithGoogle()
        .then(result => {
            const logged = result.user;
            navigate('/')
            console.log(logged);
        })
        .catch(err => setError(err.message))
    }
    
    return (
        <>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>you are new to here? <Link className="text-blue-500" to='/register'>Register now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-700 border-0" type="submit" value="Login" />
                            </div>

                            <button>
                                <img onClick={googleLogin} className='w-1/4 mx-auto mt-3 border' src={logo} alt="" />
                            </button>
                            <p className='text-red-600'><small>{error}</small></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;