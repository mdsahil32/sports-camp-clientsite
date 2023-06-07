
const Instructors = ({ instructor }) => {
    const { name, email, image } = instructor

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <p>Email: {email}</p>
            </div>
            <figure><img className="h-80" src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default Instructors;