import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type PropsType = {}
type DialogsItemPropsType = {
    name: string
    id?: number

}
type MessagePropsType = {
    message: string

}

const DialogsItem = (props: DialogsItemPropsType) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialogsItem + '' + s.active}>

        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessagePropsType) => {


    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props: PropsType) => {

    let dialogs = [
        {id: 1, name: "Rustam"},
        {id: 2, name: "Timur"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Dimych"},
        {id: 5, name: "Vitalya"},
        {id: 6, name: "Georg"},
    ]

    let messages = [
        {id: 1, message: "Assalam Aleykum"},
        {id: 2, message: "Vaaleykum Assalam"},
        {id: 3, message: "How are You?"}
    ]

    let dialogsElement = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElement = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>

    );
}

export default Dialogs;
