import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const InstructorAddClass = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://sports-academy-serversite.vercel.app/addclass')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                data.map(addClass => <ClassCard
                    key={addClass._id}
                    addClass={addClass}
                    ></ClassCard>)
            }
        </div>
    );
};

export default InstructorAddClass;