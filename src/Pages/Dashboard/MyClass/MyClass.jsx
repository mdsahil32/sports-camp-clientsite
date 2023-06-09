import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyClass = () => {
    const [myClass, setMyClass] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/myclass'
        axios.get(url).then(res => {
            setMyClass(res.data);
        })
    })
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Sports Name</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClass.map((my, index) => <tr key={my._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={my.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{my.instructorName}</div>
                                        <div >Price: ${my.price}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {my.sportName}
                                <br />
                                <span className="badge badge-secondary">AvailableSeats: {my.availableSeats}</span>
                            </td>
                            <td>Purple</td>
                            <td>
                            <Link to={`/classes/${my._id}`}><button   className="badge badge-outline text-xl">Details</button></Link>
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyClass;