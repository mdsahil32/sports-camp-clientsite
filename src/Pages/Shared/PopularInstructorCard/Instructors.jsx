
const Instructors = ({ instructor }) => {
    console.log(instructor);
    // const { name, email, image } = instructor

    return (
        <div className="card w-full bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor?.name}</h2>
                <p>Email: {instructor?.email}</p>
            </div>
            <figure><img className="h-80" src={instructor?.image} alt="Shoes" /></figure>
        </div>
    );
};

export default Instructors;