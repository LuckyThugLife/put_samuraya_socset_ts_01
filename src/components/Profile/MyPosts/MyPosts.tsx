import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../redux/state";



type MyPostsPropsType = {
    addPost: (postText: string) => void
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts:React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <div key={p.id}><b><Post message={p.message} likeCount={p.likeCount}/></b></div>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // if (newPostElement.current) {
        //     props.addPost(newPostElement.current.value)
        // }
        props.addPost(props.newPostText)
    }
    
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // if (newPostElement.current) {
        //     props.updateNewPostText(newPostElement.current.value)
        // }
        props.updateNewPostText(e.currentTarget.value)


    }
    return (

        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
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