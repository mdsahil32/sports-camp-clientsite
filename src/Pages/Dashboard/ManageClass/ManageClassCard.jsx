
const ManageClassCard = ({ instructorClass }) => {
    const { classname, classimg, instructorname, instructoremail, seats, price } = instructorClass

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl my-12">
                <figure><img className='' src={classimg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h4 className="card-title">
                        Class name: {classname}
                    </h4>
                    <h2 className="card-title">
                        Instructor Name: {instructorname}
                    </h2>
                    <h4>Instructor email: {instructoremail}</h4>
                    <div className="badge bg-blue-400">Seat:{seats}</div>
                    <h4>Price: ${price}</h4>
                    <div className="space-x-5">
                    <button className="btn btn-info btn-sm">Approve</button>
                    <button className="btn btn-info btn-sm">Deny</button>
                    <button className="btn btn-info btn-sm">send feedback </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageClassCard;