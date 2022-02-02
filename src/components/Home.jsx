import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"
import { UserContext } from "../contexts/UserContext"
import Header from "./Hearder";

export const Home = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div className="text-center">
            { isAuthenticated && user && <p>Welcome {user.email}</p> }
            <Header />
        </div>
    )
}