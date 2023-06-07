import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (password !== confirmPassword) {
           return setError("password isn't match")
        }
        setError('')
        createUser(email, password)
        .then(result => {
            const logged = result.user;
            console.log(logged);
            Swal.fire('Your Account Create Successfully')
            updateUserProfile(name, photo)
                .then(() => {
                    // console.log('user profile update');
                }).catch((error) => {
                    setError(error.message)
                });
        })
        .catch(error => {
            setError(error.message);
        })
    form.reset()
    }

    return (
        <>
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold mt-12">Register now!</h1>
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='confirmPassword' type="password" placeholder="confirm password" className="input input-bordered" required />
                        </div>
                            <label className="label">
                                <p>Already have an account?? <Link className="text-blue-500" to='/login'>Login now</Link></p>
                            </label>
                        <div className="form-control mt-6">
                            <input className="btn bg-blue-700 border-0" type="submit" value="Register" />
                        </div>
                        <p className='text-red-600'><small>{error}</small></p>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
};

export default Register;