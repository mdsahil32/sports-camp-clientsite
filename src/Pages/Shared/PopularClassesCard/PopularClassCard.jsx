import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const PopularClassCard = ({ classe }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { image, availableSeats, price, sportName, instructorName, _id } = classe

    const handleAdd = classe => {
        console.log(classe);
        if (user && user?.email) {
            const mySelectedClass = {classId:_id,image, availableSeats, price, sportName, instructorName, user:user.email }

            fetch('https://sports-academy-serversite.vercel.app/myclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(mySelectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                      navigate('/login', {state: {from: location}})
                }
            })
        }

    }

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl my-12">
                <figure><img className="h-80" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Sport: {sportName}
                    </h2>
                        <div className="badge bg-blue-400">Available Seat:{availableSeats}</div>
                    <h4>Instructor Name: {instructorName}</h4>
                    <h4>Price: ${price}</h4>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAdd(classe)} className="badge badge-outline text-xl">select</button>
                      <Link to={`/classes/${_id}`}>  <button  className="badge badge-outline text-xl">Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularClassCard;