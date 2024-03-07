import { useEffect } from "react";
import { useState } from "react";
// import Post from '../posts/Post.css'
import Post from '../post/Post';

const Posts = ({ reload }) => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        let data = localStorage.getItem('data');
        
        if(!data)
            return;

            data=JSON.parse(data);

            setPosts(data);

    }, [reload])

    return (
        <>
            <div className="posts">
                {posts.map((data, index) =>
                    <Post data={data} key={index} />
                )}
            </div>
        </>
    )

}
export default Posts;