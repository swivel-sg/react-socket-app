import React from 'react';

const ChatMessage = (props) => {

   
    return(
        <div style={{marginBottom:'10px'}}>
            <div>
                <span className={props.userClass || ""}>{props.username}</span>
                &nbsp;&nbsp;&nbsp;
                <span className={props.createdClass || ""}>{props.createdAt}</span>
                <div className={props.messageClass || ""}>{props.text}</div>
            </div>
        </div>
    );
}

export default ChatMessage;