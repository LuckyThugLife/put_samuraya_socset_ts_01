import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.popphoto.com/uploads/2019/01/17/OB5MG24P4F3YXP22SK2EGLCQ3A.jpg"/>
            </div>

            <div>
                ava + discription
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>

    );
}

export default Profile;
