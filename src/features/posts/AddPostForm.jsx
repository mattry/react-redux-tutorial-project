import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from './postsSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onAddPost = (e) => {
        e.preventDefault();
        if (title && content){
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
        }
    };

    return (
        <div className="container mt-4">
            <div className="display-4">Add a Post</div>
            <form onSubmit={onAddPost}>
                <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={onTitleChanged}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="content" className="form-label">Content:</label>
                    <textarea
                        className="form-control"
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        value={content}
                        onChange={onContentChanged}
                        required
                    >

                    </textarea>
                </div>
                <button type="submit" className="btn btn-secondary">Add Post</button>
            </form>
        </div>
    );


}

export default AddPostForm;