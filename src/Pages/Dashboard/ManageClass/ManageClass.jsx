import { useEffect, useState } from "react";
import ManageClassCard from "./ManageClassCard";

const ManageClass = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://sports-academy-serversite.vercel.app/addclass')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <><h1 className="text-center text-2xl mt-4">Instructor Add This Class</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-12">
            {
                data.map(instructorClass => <ManageClassCard
                    key={instructorClass._id}
                    instructorClass={instructorClass}
                ></ManageClassCard>)
            }
        </div>
        </>
    );
};

export default ManageClass;
