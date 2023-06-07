import axios from "axios";
import { useEffect, useState } from "react";
import PopularClassCard from "../../Shared/PopularClassesCard/PopularClassCard";


const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        const url = 'classes.json'
        axios.get(url).then(res => {
            setClasses(res.data);
        })
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center uppercase mt-24 underline">popular classes</h2>
            {/* TODO : KEY _ID */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
           {
                classes.slice(0,6).map(classe => <PopularClassCard
                key={classe.name}
                classe={classe}
                ></PopularClassCard>)
            }
           </div>
        </div>
    );
};

export default PopularClasses;