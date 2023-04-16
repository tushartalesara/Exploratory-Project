import './App.css'
import React, { useState } from 'react'
import Status from './components/Status'
import Log from './components/Log'
import Network from './components/Network'
import Footer from './components/Footer'
function App() {
  // To change text which appear in log and status part when a change occurred
  const [text, setText] = useState("")
  const [text2, setText2] = useState("")
  // All the data from session storage is removed when page reloads
  window.addEventListener('load', () => {
    sessionStorage.clear();
  })
  return (
    <>
      <div className="header">
        Welcome TO the WORLD of SUBNETS!!
        <div className='clock'> <iframe className='clocki' src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FKolkata" width="100%" height="90" frameBorder="0" title="clocka" seamless></iframe> </div>
      </div>
      <div className='home'>
        {/* Contains the recent activity which user is performing */}
        <Status text={text} text2={text2} />
        {/* Contains the picture of network */}
        <Network />
        {/* Contains all the activity which user has performed till now */}
        <Log text={text} />
      </div>
      {/* Contains the options or activity which user can perform */}
      <Footer setText={setText} setText2={setText2} />
    </>
  );
}

export default App;
