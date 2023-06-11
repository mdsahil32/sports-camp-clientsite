import axios from "axios";
import { useEffect, useState } from "react";
import Instructors from "../Shared/PopularInstructorCard/Instructors";


const Instructor = () => {

    const [instructors , setInstructors] = useState([])

    useEffect(() =>{
        const url = 'http://localhost:5000/instructors'
        axios.get(url).then(res =>{
            console.log(res.data);
            setInstructors(res.data)
        })
    },[])

    return (
        <div className="max-w-screen-lg mx-auto">
            <h2 className="text-4xl font-semibold text-center uppercase mt-24 underline ">Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
           {
                instructors.map(instructor => <Instructors
                key={instructor._id}
                instructor={instructor}
                ></Instructors>)
            }
           </div>
        </div>
    );
};

export default Instructor;