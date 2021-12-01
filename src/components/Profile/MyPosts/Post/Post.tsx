import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/state";


type PostPropsType = {
    message: string
    likeCount: number
}
const Post: React.FC<PostPropsType> = (props) => {
  return (
      <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_Yr2W0NAtn2WKhxBHgmLPPAZswZnX9yXhg&usqp=CAU" alt="avatar"/>
          {props.message}
          <div>
              <span>
                  likes {props.likeCount}
              </span>
          </div>
      </div>

  );
}

export default Post;
