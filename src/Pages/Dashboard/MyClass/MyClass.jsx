import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyClassDetail from "./MyClassDetail";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClass = () => {
    const { user } = useContext(AuthContext)
    const [myClass, setMyClass] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/myclass/${user?.email}`
        axios.get(url).then(res => {
            setMyClass(res.data);
        })
    })

    return (
        <>
        <div className="flex space-x-12">
            <h3 className="text-3xl">Selected Class</h3>
            
        </div>
            <div className="overflow-x-auto w-full">
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
        </>
    );
};

export default MyClass;