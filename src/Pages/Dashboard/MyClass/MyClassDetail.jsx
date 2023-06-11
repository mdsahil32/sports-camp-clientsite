import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyClassDetail = ({ mySelected, index, myClass, setMyClass }) => {

    // console.log(user.email);
    const { image, instructorName, price, sportName, _id, availableSeats } = mySelected

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myclass/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                            const remaining = myClass.filter(Class => Class._id !== _id)
                            setMyClass(remaining)
                        }
                    })
            }
        })
    }

    return (
        <tr >
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{instructorName}</div>
                        <div >Price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {sportName}
                <br />
                <span className="badge badge-secondary">AvailableSeats: {availableSeats}</span>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="badge badge-outline text-xl">Delete</button>
            </td>
            <td>
                <Link to='/dashboard/payment'>
                    <button className="btn btn-secondary btn-sm">PAY</button>
                </Link>
            </td>
        </tr>
    );
};

export default MyClassDetail;