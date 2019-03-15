
import React from 'react';

import Contact from './Contact/Contact';
import * as contactList from '../../services/contactList';



var userOptions = contactList.retrieveContactList();


// future change to class component


function renderContact(props){
    var contactList = [];
    
    for(var i = 0; i < userOptions.length; i ++){
        contactList.push(
                <Contact 
                    key={userOptions[i].username}
                    id={userOptions[i].id} 
                    username={userOptions[i].username} 
                    organization={userOptions[i].organization}
                    selectUser={props.selectUser}
                />
        );
    }
    return contactList;
}



const Contacts = (props) => {
    
    return(
        <div className="ml-4">
            {renderContact(props)}
        </div>

        
    );
}

export default Contacts;
