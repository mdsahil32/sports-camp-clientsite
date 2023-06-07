import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = (children) => {
    const {user, loading} = useContext(AuthContext)
    // const location = useLocation()

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user) {
        return children
    }

    return (
        <Navigate to='/login'  replace ></Navigate>
    )
};

export default PrivateRoute;