import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>


}

const Dialogs:React.FC<DialogsPropsType> = (props) => {



    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElement = props.messages.map(m => <Message message={m.message}/>)

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
