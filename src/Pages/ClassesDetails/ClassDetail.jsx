import { useLoaderData } from "react-router-dom";

const ClassDetail = () => {
    const classDetail = useLoaderData()
    const { image, availableSeats, price, sportName, instructorName, } = classDetail
    return (
        <>
        <h3 className="text-3xl uppercase font-serif font-semibold text-center">Details</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-96 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Sport: {sportName}</h1>
                        <h1 className="text-2xl font-bold">Instructor: {instructorName}</h1>
                        <p className="py-2 text-xl">Price: ${price}</p>
                        <p className="py-2 text-xl">Available Seats:{availableSeats}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassDetail;