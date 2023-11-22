import { Route,Routes,Link } from "react-router-dom";
import Home from "./home";
import Posts from "./Posts";
function Webpages2(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<Posts />} />
        </Routes>
        <h1> </h1>
        </>
    )
}
export default Webpages2;