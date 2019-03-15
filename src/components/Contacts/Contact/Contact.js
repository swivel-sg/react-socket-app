import React from 'react';
import Card, { Title, Body, Text } from 'react-bootstrap/Card';


const Contact = (props) => {
   
    return(
        <Card className='ml-4' style={{ cursor: 'pointer' }}>
            <Body onClick={() => {props.selectUser(props);}}>
                <Title>{props.organization}</Title>
                <Text>{props.username}</Text>
            </Body>
        </Card>  
    );
}

export default Contact;