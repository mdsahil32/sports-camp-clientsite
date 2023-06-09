import axios from "axios";
import { useEffect, useState } from "react";
import MyClassDetail from "./MyClassDetail";

const MyClass = () => {
    const [myClass, setMyClass] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/myclass'
        axios.get(url).then(res => {
            setMyClass(res.data);
        })
    })

  

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Sports Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClass.map((mySelected, index) => 
                        <MyClassDetail
                        key={mySelected._id}
                        mySelected={mySelected}
                        index={index}
                        myClass={myClass}
                        setMyClass={setMyClass}
                        ></MyClassDetail>
                       )
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyClass;