import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostsType} from "../../redux/state";




export type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
}





const Profile:React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo/>

            <div>
                <MyPosts posts={props.posts}
                         addPost={props.addPost}/>
            </div>
        </div>

    );
}

export default Profile;
