import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from "../../redux/state";


export type ProfilePropsType = {
    posts: Array<PostsType>
}


const Profile:React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo/>

            <div>
                <MyPosts posts={props.posts}/>
            </div>
        </div>

    );
}

export default Profile;
