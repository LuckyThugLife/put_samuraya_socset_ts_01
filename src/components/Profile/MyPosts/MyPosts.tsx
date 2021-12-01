import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

import {PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: Array<PostsType>

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)


    return (

        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    );
}

export default MyPosts;
