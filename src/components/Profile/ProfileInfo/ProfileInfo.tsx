import React from 'react';
import s from './ProfileInfo.module.css';


const Profile = () => {
    return (
        <div>

            <div>
                <img src="https://www.popphoto.com/uploads/2019/01/17/OB5MG24P4F3YXP22SK2EGLCQ3A.jpg"/>
            </div>

            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}

export default Profile;
