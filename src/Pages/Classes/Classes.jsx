import axios from "axios";
import { useEffect, useState } from "react";
import PopularClassCard from "../Shared/PopularClassesCard/PopularClassCard";

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        const url = 'https://sports-academy-serversite-mdsahil32.vercel.app/classes'
        axios.get(url).then(res => {
            setClasses(res.data);
        })
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center uppercase mt-24 underline"> classes</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
           {
                classes.map(classe => <PopularClassCard
                key={classe._id}
                classe={classe}
                ></PopularClassCard>)
            }
           </div>
        </div>
    );
};

export default Classes;