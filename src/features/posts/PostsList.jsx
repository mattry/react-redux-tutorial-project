import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import AddPostForm from "./AddPostForm";

const PostsList = () => {  
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <div key={post.id}>
            <div className="card mb-2" >
                <div className="card-body">
                    <div className="h4 card-title">
                        {post.title}
                    </div>
                    <div className="card-text">
                        {post.content}
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="container">
                <div className="display-4">Posts</div>
                <br/>
                {renderedPosts}
                <AddPostForm />
            </div>
        </>
    )

}

export default PostsList;