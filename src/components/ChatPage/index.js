import React, { Component } from 'react'; 

import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import chatService from '../../services/chatService';
//import io from '../../services/chatService';

class ChatPage extends Component{

    constructor(){
       
        super();
        this.connect = false;
        this.state = {
            id: null ,
            userName: null ,
            organization: null ,
            messages: [],
            messageHtml: []
        };
        this.socket = null;
    }
    

    componentDidUpdate(){
        this.checkSocketConnect();
    }
    
    
    onSubmit = (username, organization, message) => {
        // trigger chatService

        let messageOptions ={
            username,
            organization, 
            message: message
        };
        chatService.sendChatMessage(this.socket, messageOptions, (status) => {
            console.log(status);
        })
    }

    retrieveChatMessage = (messages) => {
        
        let messageHtml = [...this.state.messageHtml];  
        messageHtml.push(<ChatMessage {...messages} key={this.state.messageHtml.length}/>);
        return messageHtml;
    }

    onMessageCallback = (options) => {
        let {username, text, createdAt} = options;
        let messages = {username, text, createdAt};
        let messageHtml = this.retrieveChatMessage(messages);
        this.setState({
            messages: [...this.state.messages, {...messages}],
            messageHtml: [...messageHtml] 
        });
    }
    
    afterConnected = () => {

        chatService.onMessage(this.socket, this.onMessageCallback);
        chatService.joinChatRoom(this.socket, this.props.userInfo);
    }
    
    checkSocketConnect = () => {
        
        if( !this.connect && this.props.userInfo){
            
            this.socket = chatService.startConnection('http://localhost:3000');
            
            this.afterConnected();
            this.connect = true;
            this.setState({
                id: this.props.userInfo.id ,
                username: this.props.userInfo.username ,
                organization: this.props.userInfo.organization
            });
                
            
        }
    }

    

    

    render(){

        return (
       
            <div>
                <div>
                    {this.state.messageHtml.length === 0 ? null : this.state.messageHtml} 
                </div>  
                <br/>
                <ChatForm onSubmit={this.onSubmit} username={this.state.username} organization={this.state.organization} value=""/>
            </div>     
        );
    }
}

export default ChatPage;

// change to class



