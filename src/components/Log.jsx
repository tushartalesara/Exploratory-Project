import React from 'react'
import '../App.css'
const txt=[]
function Log(text) {
  // To show the time at which a particular activity is happening
  const date = new Date();
  const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
  if(text.text!==""){txt.unshift(showTime+" - "+text.text)}
  return (
    <div className="log">
      <h3>Log</h3>
      <div className='log-items'>
        {txt.map((item,index) => {
          return <p key={index}>{item} <br /><br /></p>;
        })}
      </div>
    </div>
  );
}

export default Log
