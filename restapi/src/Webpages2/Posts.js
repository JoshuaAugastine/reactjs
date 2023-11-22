import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Posts(){
    const {id} =useParams();

    const [error,setError]= useState("");
    const [isLoaded,setIsLoaded]= useState(true);
    const [post,setPost] = useState([]);

  

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(res =>res.json())
        .then(
            (data) =>{
                console.log(data);
                setPost(data);
                setIsLoaded(true);
              
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded){
        return <div>Loading...</div>
    }
    if (post){ 
    return(
        <> 
        <center> 
        <h1>{post.title}</h1>
        <div>Body: {post.body}</div>
        <div>UserId: {post.userId}</div>

            </center>
        </>
    );
}
}
export default Posts;