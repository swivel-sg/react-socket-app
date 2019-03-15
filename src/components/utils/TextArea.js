import React from 'react';


const TextArea = (props) => {
    return(
        <textarea 
            onChange={(e) => props.onChange(e)} 
            className={props.class || 'form-control'} 
            rows={ props.rows || "2" } 
            defaultValue={props.defaultValue}></textarea>
    );
}

export default TextArea;