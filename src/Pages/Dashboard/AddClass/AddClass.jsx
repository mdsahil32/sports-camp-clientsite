import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const handleAdd = e =>{
        e.preventDefault()
        const form =e.target;
        const classname = form.classname.value;
        const classimg = form.classimg.value;
        const instructorname = form.instructorname.value;
        const instructoremail = form.instructoremail.value;
        const seats = form.seats.value;
        const price = form.price.value;
        const addClass = {classname, classimg, instructorname, instructoremail, seats, price}
        console.log(addClass);
        fetch('https://sports-academy-serversite-mdsahil32.vercel.app/addclass',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset()
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Added Class Successfully',
                    'success'
                  )
            }
        })
    }
    return (
        <>
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Add Class!</h1>
                    </div>
                    <form onSubmit={handleAdd} className="card  w-full  ">
                        <div className="card-body grid grid-cols-3 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name
                                    </span>
                                </label>
                                <input type="text" name="classname" placeholder="Class name" className="input input-bordered w-80" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" name="classimg" placeholder="Class Image" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input readOnly defaultValue={user?.displayName} type="text" name="instructorname"  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <input readOnly defaultValue={user?.email} type="email" name="instructoremail" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input type="number" name="seats" placeholder="Available seats" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddClass;