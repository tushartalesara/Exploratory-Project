import React, { useState } from 'react';
import '../../App.css';
const ipaddr = require('ipaddr.js')
const ipRangeCheck = require('ip-range-check')
function Assign(props) {
    // Assign part have two section so when click is true 1st section is active and when click is false 2nd part is active
    const [click, setCLick] = useState(false)
    // Variable to store four parts of Network id
    let A, B, C, D;
    // Variable to store Ip address and mask bit
    const [NI, setNI] = useState("192.168.1.0")
    const [SM, setSM] = useState(24)
    const [NI1, setNI1] = useState("192.168.0.0")
    const [NI2, setNI2] = useState("192.168.0.0")
    const [NI3, setNI3] = useState("192.168.0.0")
    const [M4, setM4] = useState(1)
    const [M5, setM5] = useState(1)
    const [M6, setM6] = useState(1)
    // This function will check whether the ip address provided by the user is valid or not
    const ValidateIPaddress = (ipaddress) => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return (true)
        }
        alert("Please enter netwrok id of format a.b.c.d!!")
        return (false)
    }
    let addr;
    // This function will prompt 2nd section to active
    const handleClick = (e) => {
        e.preventDefault()
        // To chck whther netowrk id provided is valid or not
        if (!ValidateIPaddress(NI)) { return; }
        // It is a library which is used in javascript to handle ip addresses
        addr = ipaddr.parse(NI);
        A = addr.octets[0]; B = addr.octets[1]; C = addr.octets[2]; D = addr.octets[3]
        // Here user have to enter network id which is relevant to class C network. So below is to check whether valid class C network id is provided or not
        let s = 0, y = 0;
        for (let i = 1; i < 129; i = i * 2) {
            if ((D & i) && s === 0) { s = 8 - y; }
            y++;
        }
        // In class C network first part of ip address should be between 192-223
        if (A < 192 || A > 223) { alert("Class C netwrok can only have first part of ip address between 192-223!!"); return; }
        // In class C network mask bits should be >=24
        if (SM < 0) { alert("Enter Valid number of bits!!"); return; }
        else if (SM < 24 + s) { alert(`Number of bits used in network id are more than specified. Minimum Maks bits required are : ${24 + s}!!`); return; }
        // As here we rewuire  the netork to contain 3 subnet each of which shoukd have 3 host ids. So maximum of 28mask bits can work
        else if (SM >= 28 && SM <= 32) { alert(`Given Network cannot contain 3 subnets and 9 hosts. Minimum Maks bits required are : ${24 + s}!!`); return; }
        else if (SM > 32) { alert("Cannot use more than 32 bits in subnet mask!!"); return; }
        else if (isNaN(SM)) { alert("Enter a valid number!!"); return; }

        // When user enters correct network id and mask bits, this will assign ip address to router 1 and router 3 automatically and user will have to fill ip address of router 2 and hosts connected to router 2 accordingly
        setNI1(NI)
        setNI2(A + "." + B + "." + C + "." + (D + (1 << (6 - SM % 8))))
        setM4(A + "." + B + "." + C + ".")
        setM5(A + "." + B + "." + C + ".")
        setM6(A + "." + B + "." + C + ".")
        setNI3(A + "." + B + "." + C + "." + (D + (1 << (7 - SM % 8)) + (1 << (6 - SM % 8))))

        // When ip address of router 1, 3 s assigned they will change color to green hich shows they are active now.
        document.getElementsByClassName('Router')[0].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('Router')[2].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host1')[0].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host1')[1].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host1')[2].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host3')[0].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host3')[1].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host3')[2].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        // To prompt 2nd section of assign part
        setCLick(!click)
        props.setText("Assigning Ip addresses to Router 2 and hosts connected to router 2.")
    }
    // Function to handle what happens when user wnats to go on 1st function from 2nd section of assign part
    const handleBack1 = (e) => {
        e.preventDefault();
        // Router 1, 3 will change their color to white indicating their inactive state
        document.getElementsByClassName('Router')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('Router')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host1')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host1')[1].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host1')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host3')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host3')[1].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host3')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        // Text is set to modifying as user has gone back.
        props.setText('Modifying Network Id and mask bits assigned.')
        setCLick(!click)
    }
    // Function which work when user is done with 2nd section also
    const handleDone = (e) => {
        e.preventDefault();
        addr = ipaddr.parse(NI);
        A = addr.octets[0]; B = addr.octets[1]; C = addr.octets[2]; D = addr.octets[3]
        // TO check whether the ip address of router 2 provided by user is correct or not
        if (NI2 !== (A + "." + B + "." + C + "." + (D + (1 << (6 - SM % 8)))) && NI2 !== (A + "." + B + "." + C + "." + (D + (1 << (7 - SM % 8))))) {
            alert("Incorrect Ip address for Router 2!!")
            return;
        }
        addr = ipaddr.parse(NI2);
        A = addr.octets[0]; B = addr.octets[1]; C = addr.octets[2]; D = addr.octets[3]
        console.log(A + "." + B + "." + C + "." + (D + (1 << (6 - SM % 8)) - 1));
        // To check whther the ip address provided by user is in range of host ip address available with router 2
        if (!ipRangeCheck(M4, `${NI2}/${SM + 2}`) || NI2 === M4 || A + "." + B + "." + C + "." + (D + (1 << (6 - SM % 8)) - 1) === M4) {
            alert("Enter valid Ip address of M4 according to ip address of router 2!!")
            return
        }
        if (!ipRangeCheck(M5, `${NI2}/${SM + 2}`) || NI2 === M5 || A + "." + B + "." + C + "." + (D + (1 << (6 - SM % 8)) - 1) === M5) {
            alert("Enter valid Ip address of M5 according to ip address of router 2!!")
            return
        }
        if (!ipRangeCheck(M6, `${NI2}/${SM + 2}`) || NI2 === M6 || A + "." + B + "." + C + "." + (D + (1 << (6 - SM % 8)) - 1) === M6) {
            alert("Enter valid Ip address of M6 according to ip address of router 2!!")
            return
        }
        // All the host cannot have same ip address
        if (M4 === M5 || M5 === M6 || M6 === M4) {
            alert("Ip address of host machines cannot be same!!")
            return
        }
        alert("Ip addresses assigned!!")
        // Router 2 will change its color to green indicating its active state
        document.getElementsByClassName('Router')[1].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host2')[0].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host2')[1].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        document.getElementsByClassName('host2')[2].style.cssText = "color: white; background-color: rgb(75, 200, 20);"
        // All the data is saved in session storage so that they can be accessed from any component
        sessionStorage.setItem("NI", NI)
        sessionStorage.setItem("SM", SM)
        sessionStorage.setItem("NI1", NI1)
        sessionStorage.setItem("NI2", NI2)
        sessionStorage.setItem("NI3", NI3)
        sessionStorage.setItem("M4", M4)
        sessionStorage.setItem("M5", M5)
        sessionStorage.setItem("M6", M6)
        // It will ensure to that assign part is done and will redirect to original footer
        setCLick(false)
        props.setText('')
        props.sc(false)
        props.sc1(false)
    }
    // If user clicks close between assign part it will redirect to original footer and no data is saved
    const handleClose = (e) => {
        e.preventDefault()
        props.setText('')
        props.sc(false)
        props.sc1(false)
    }
    return (
        <>
            <form className={click ? 'form' : 'form-active'} >
                <label>Network id for class C type network (Range: 192.0.0.0 to 223.255.255.255):</label>
                <br />
                <input type="text" value={NI} onChange={(e) => setNI(e.target.value)} />
                <label>Mask Bits (Range : 24 to 32):</label>
                <input type="text" value={SM} onChange={(e) => setSM(e.target.value)} />
                <div>
                    <button type='submit' className='bn-btn' onClick={handleClose}>Close</button>
                    <button onClick={handleClick} className='bn-btn'>Next <i className="fa-solid fa-chevron-right" /></button>
                </div>
            </form >
            <form className={click ? 'form-active' : 'form'} >
                In the above given network Router 2 is main router as it is connected to both the routers 1 and 3.<br />
                IP Address of Router 1: {NI1}, Router 3: {NI3} and Mask bits: {SM + 2}<br />
                Fill Ip address of Router 2 and then Ip address of hosts according to the ip address of router 2<br />
                <div className="machine">
                    <label>IP address for Router 2: </label>
                    <input type="text" value={NI2} onChange={(e) => setNI2(e.target.value)} />
                </div>
                <div className="machine">
                    <label>IP address for M4: </label>
                    <input type="text" value={M4} onChange={(e) => setM4(e.target.value)} />
                </div>
                <div className="machine">
                    <label>IP address for M5: </label>
                    <input type="text" value={M5} onChange={(e) => setM5(e.target.value)} />
                </div>
                <div className="machine">
                    <label>IP address for M6: </label>
                    <input type="text" value={M6} onChange={(e) => setM6(e.target.value)} />
                </div>
                <div>
                    <button className='bn-btn' onClick={handleBack1}><i className="fa-solid fa-chevron-left" /> Back</button>
                    <button className='bn-btn' onClick={handleDone}>Done</button>
                </div>
            </form>
        </>
    );
}
export default Assign;