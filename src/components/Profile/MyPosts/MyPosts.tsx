import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


export type AddPostType = {
    addPost: (postText: string) => void
    message: string
}
type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
}

const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ""
        }
    }
    return (

        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    );
}

export default MyPosts;