import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [error,setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [posts,setPosts] = useState([]);

    useEffect (() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(
            (data)=>{
                setIsLoaded(true);
                setPosts(data);
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    
    if(error){
        return <div>Error: {error.message}</div>
    } else if (!isLoaded){
        return <div>Loading...</div>
    }
    else {
        return(
            <>
            <ul>
                {posts.map(post =>(
                    <li> 
                    <Link to={`post/${post.id}`}> {post.title} </Link> 
                    </li>
                ) )}
            </ul>
            </>
        )
    }
}
export default Home;