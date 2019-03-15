import React, {Component}  from 'react';
import Button from '../../utils/Button';
import TextArea from '../../utils/TextArea';

class ChatForm extends Component{
    constructor(){
        super();
        this.state = {
            chatMessage: ""
        };
    }

    onChangehandler = (e) => {
        let value = e.target.value;
        this.setState({
            chatMessage: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.onSubmit(this.props.username, this.props.organization, this.state.chatMessage);
        this.setState({chatMessage: "Go"});
    }

    render(){
        return(
            <form onSubmit={(e) => { this.onSubmit(e) }}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <TextArea onChange={this.onChangehandler} class="form-control" rows="2" defaultValue={this.state.chatMessage}/>
                            </div>
                            <div className="col-sm-3">
                                <Button class="btn btn-primary" name="Send Message"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

export default ChatForm;