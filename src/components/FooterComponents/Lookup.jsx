import React, { useState } from 'react';
import '../../App.css';
const ipaddr = require('ipaddr.js')
const ipRangeCheck = require('ip-range-check')
let p = new Array(5);
function Lookup(props) {
    let A, B, C, D, addr, sm;
    // click is true packet is not recieved yet, when user clicks recieve packet then click be changed to false thus indicating packet is recievedd
    const [clk, setCLk] = useState(true)
    // Variable to store some of the data which are required from session storage
    if(sessionStorage.getItem("NI")!==null ){
        addr = ipaddr.parse(sessionStorage.getItem("NI"))
        A = addr.octets[0]; B = addr.octets[1]; C = addr.octets[2]; D = addr.octets[3]
        p[0] = sessionStorage.getItem("M4")
        p[1] = sessionStorage.getItem("M5")
        p[2] = sessionStorage.getItem("M6")
        p[3] = sessionStorage.getItem("NI1")
        p[4] = sessionStorage.getItem("NI3")
        sm = Number(sessionStorage.getItem("SM"))
    }
    // Variable to store the input port number which user has entered according to where he thinks packet whould be delivered
    const [port, setPort] = useState("")
    // Variable to destination of recieved packet
    const [packet, setpacket] = useState()
    // When user click recieve packet this function will work
    const getPacket = (e) => {
        e.preventDefault()
        props.setText("Packet Recieved Now Looking Up for destination of recieved packet!!")
        // This will generate a random packet
        setpacket(A + "." + B + "." + C + "." + (D + ((Math.floor(Math.random() * (100000)) + 1) % ((1 << (8 - sm % 8)) - 1))))
        // click is set to false indicating packet is generated
        setCLk(false)
    }
    // If user clicks close between Lookup part it will redirect to original footer
    const handleClose = (e) => {
        e.preventDefault()
        setCLk(true)
        props.setText('')
        props.sc(false)
        props.sc3(false)
    }
    // When user clicks send packet this function will work
    const sendPacket = (e) => {
        e.preventDefault()
        // Checking whether the port number entered by user is correct or not according to packet recieved
        for (let i = 0; i < 3; i++) {
            if (packet === p[i]) {
                if (Number(port) !== i + 1) {
                    alert("Incorrect Port Number. Try again!!")
                    return
                }
                else {
                    alert("Packet Sent Successfully!!")
                    setPort('')
                    props.setText("Inside Lookup section")
                    setCLk(true)
                    return
                }
            }
        }
        if (ipRangeCheck(packet, `${p[3]}/${sm + 2}`)) {
            if (port !== "4") {
                alert("Incorrect Port Number. Try again!!")
                return
            }
            else {
                alert("Packet Sent Successfully!!")
                setPort('')
                props.setText("Inside Lookup section")
                setCLk(true)
                return
            }
        }
        else if (ipRangeCheck(packet, `${p[4]}/${sm + 2}`)) {
            if (port !== "5") {
                alert("Incorrect Port Number. Try again!!")
                return
            }
            else {
                alert("Packet Sent Successfully!!")
                setPort('')
                props.setText("Inside Lookup section")
                setCLk(true)
                return
            }
        }
        // Default gateway where a packet can be sent if it is contians a destination not present in network
        else {
            if (port !== "6") {
                alert("Incorrect Port Number. Try again!!")
                return
            }
            else {
                alert("Packet Sent Successfully!!")
                setPort('')
                props.setText("Inside Lookup section")
                setCLk(true)
                return
            }
        }
    }
    return (
        <>
            <h3>Look for the port where the recieved packet will be sent by router 2<br />{clk ? `` : `Destination of Packet: ${packet}`}</h3>
            {clk ? <br /> : ''}
            <br />
            <div className="lu">
                <table>
                    <thead>
                        <tr>
                            <th>Ip Address</th>
                            <th>Mask Bits</th>
                            <th>Port Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sessionStorage.getItem("M4")}</td>
                            <td>32</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>{sessionStorage.getItem("M5")}</td>
                            <td>32</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>{sessionStorage.getItem("M6")}</td>
                            <td>32</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>{sessionStorage.getItem("NI1")}</td>
                            <td>26</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>{sessionStorage.getItem("NI3")}</td>
                            <td>26</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>{sessionStorage.getItem("NI")}</td>
                            <td>{sessionStorage.getItem("SM")}</td>
                            <td>6</td>
                        </tr>
                    </tbody>
                </table>

                <form action="" className='lu-inp'>
                    {clk ?
                        <div style={{ display: "flex" }}>
                            <button className='bn-btn rp' onClick={handleClose}>Close</button>
                            <button className='bn-btn rp' onClick={getPacket}> Recieve Packet </button>
                        </div>
                        :
                        <>
                            Specify the port number to which the packet will be sent by router 2
                            <input type="text" value={port} onChange={(e) => { setPort(e.target.value) }} />
                            <div style={{ display: "flex" }}>
                                <button className='bn-btn rp' onClick={handleClose}>Close</button>
                                <button className='bn-btn rp' onClick={sendPacket}>Send Packet</button>
                            </div>
                        </>
                    }
                </form>


            </div>
        </>
    );
}
export default Lookup;