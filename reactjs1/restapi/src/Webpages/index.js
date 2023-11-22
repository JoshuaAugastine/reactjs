import { Route,Routes,Link } from "react-router-dom";
import Home from "./home";
import User from "./User";
function Webpages(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
        </Routes>
        <h1> </h1>
        </>
    )
}
export default Webpages;