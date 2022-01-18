import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType, ProfilePageType} from "../../redux/state";




export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    // posts: Array<PostsType>
    updateNewPostText: (newText: string) => void
}





const Profile:React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo/>

            <div>
                <MyPosts posts={props.profilePage.posts}
                         addPost={props.addPost}
                         newPostText={props.profilePage.newPostText}
                         updateNewPostText={props.updateNewPostText}

               />
            </div>
        </div>

    );
}

export default Profile;
