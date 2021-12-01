import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';


type DialogsItemType = {
    name: string
    id: number
}

const DialogsItem:React.FC<DialogsItemType> = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialogsItem + '' + s.active}>

        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem;
