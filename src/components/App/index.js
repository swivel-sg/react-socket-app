import React, {Component} from 'react';
import ContactsList from '../Contacts';
import ChatPage from '../ChatPage';


class App extends Component{
    constructor(){
        super();
        this.state = {
            userInfo : null
        };
    }

    // put in a io set up service file
    selectUser = ({id, username, organization}) => {
        this.setState({
            userInfo: {
                id,
                username,
                organization
            }
        });
    }



    render(){
        return(
            <div className="container" style={ {"marginTop": "30px"} }>
                <div className="row">
                    <div className="col-sm-4">
                        <ContactsList selectUser={this.selectUser}/>
                    </div>
                    <div className="col-sm-8">
                        <ChatPage userInfo={this.state.userInfo || ''}/>
                    </div>
                </div>
            </div>
        );
    }

    

    

}



export default App;