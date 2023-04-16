import React from 'react'
import '../App.css'
function Status(props) {
    // Function to check whether there is some message in text2 or not
    const text2=()=>{
        if(props.text2!==""){
            return true;
        }
        else{return false}
    }
    return (
        <div className="status">
            <h3>Status</h3>
            {props.text}
            {text2() ? ' Ip address of' : ''}<br/>
            {props.text2}
        </div>
    );
}
export default Status
