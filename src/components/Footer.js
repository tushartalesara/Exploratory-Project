import React, { useState } from 'react'
import '../App.css'
import Assign from './FooterComponents/Assign'
import Populate from './FooterComponents/Populate'
import Lookup from './FooterComponents/Lookup'
function Footer(props) {
    // Reactive varible to decide what appears on footer page
    const [click, setclick] = useState(false)
    const [click1, setclick1] = useState(false)
    const [click2, setclick2] = useState(false)
    const [click3, setclick3] = useState(false)
    // Function for assigning ip addresses
    const handleClick1 = () => {
        // When user click assign button text is changed which appears in status and log section
        props.setText('Assigning Ip addresses')
        // In network part styling is chaged to original. It is reuired when user is trying to assign the addresses again
        document.getElementsByClassName('Router')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('Router')[1].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('Router')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host1')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host1')[1].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host1')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host2')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host2')[1].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host2')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host3')[0].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host3')[1].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        document.getElementsByClassName('host3')[2].style.cssText = "color: rgb(75, 200, 20); background-color: white;"
        // Assign part of html is active
        setclick(!click)
        setclick1(!click1)
    }
    // Function for populating routing table 
    const handleClick2 = () => {
        // If there is no data in session storage it means assigning is not done so it will prompt user to assign first
        if (sessionStorage.getItem("NI") === null) {
            alert("Please assign ip addresses before populating!!")
            return;
        }
        props.setText('Populating Routing table.')
        let NI1 = sessionStorage.getItem("NI1")
        let NI2 = sessionStorage.getItem("NI2")
        let NI3 = sessionStorage.getItem("NI3")
        let M4 = sessionStorage.getItem("M4")
        let M5 = sessionStorage.getItem("M5")
        let M6 = sessionStorage.getItem("M6")
        let SM = sessionStorage.getItem("SM")
        // Text 2 is will be shown only in status part which contains the data of addresses given by user so that user can fill routing table accordingly
        props.setText2(`Router 1: ${NI1}
        Router 2: ${NI2}
        Router 3: ${NI3}
        Machine 4: ${M4}
        Machine 5: ${M5}
        Machine 6: ${M6}
        Mask bits of network: ${SM}`)
        // Populate part of html is active
        setclick(!click)    
        setclick2(!click2)
    }
    // Function for Lookup for recieved packet in routing table
    const handleClick3 = () => {
        // If there is no data in session storage it means assigning is not done so it will prompt user to assign first
        if (sessionStorage.getItem("NI") === null) {
            alert("Please assign ip addresses before look up!!")
            return;
        }
        // If p is not true that means populate part is not doen so it will prompt user to populate routing table first
        if (sessionStorage.getItem("P") !== "true") {
            alert("Please populate rotuing table before look up!!")
            return;
        }
        props.setText('Inside Lookup section')
        // Lookkup part of html is active
        setclick(!click)
        setclick3(!click3)
    }
    return (
        <div className="footer">
            {/* If click is false this three div will have display none and one of the bottom divs will be active */}
            <button className={click ? 'btn' : 'btn-active'} onClick={handleClick1}>Assign</button>
            <button className={click ? 'btn' : 'btn-active'} onClick={handleClick2}>Populate</button>
            <button className={click ? 'btn' : 'btn-active'} onClick={handleClick3}>LookUp</button>

            <div className={click1 ? 'action assign' : 'btn'}>
                <Assign sc={setclick} sc1={setclick1} setText={props.setText} />
            </div>

            <div className={click2 ? 'action populate' : 'btn'}>
                <Populate sc={setclick} sc2={setclick2} setText={props.setText} setText2={props.setText2} />
            </div>
            <div className={click3 ? 'action lookup' : 'btn'}>
                <Lookup sc={setclick} sc3={setclick3} setText={props.setText} />
            </div>
        </div>
    )
}

export default Footer
