//* Base React imports
import React from 'react';

//* Components
import DialogsList from './DialogsList/DialogList';
import DialogMessages from './DialogsList/DialogMessages/DialogMessages'

//* Styles
import './Chat.scss'

const Chat = () => {
    return (
        <div className="dialogs">
            <div className="dialogs__title">Chat</div>
            <div className="dialogs__wrapper">
            <DialogsList />
            <DialogMessages />
            </div>
        </div>
    );
}
 
export default Chat;