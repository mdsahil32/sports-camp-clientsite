
const PopularClassCard = ({ classe }) => {
    const { image, availableSeats, price, sportName, instructorName } = classe
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl my-12">
                <figure><img className="h-80" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Sport: {sportName}
                        <div className="badge badge-secondary">Available Seats:{availableSeats}</div>
                    </h2>
                    <h4>Instructor Name: {instructorName}</h4>
                    <h4>Price: ${price}</h4>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-xl">select</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularClassCard;