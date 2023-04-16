import React, { useState } from 'react'
import '../../App.css'
function Populate(props) {
    // Variable to store ip address which user provided in routing table
    const [ni1,setni1]=useState()
    const [ni3,setni3]=useState()
    const [m4,setm4]=useState()
    const [m5,setm5]=useState()
    const [m6,setm6]=useState()
    const [sm1,setsm1]=useState()
    const [sm2,setsm2]=useState()
    const [sm3,setsm3]=useState()
    const [sm4,setsm4]=useState()
    const [sm5,setsm5]=useState()
    // If user clicks close between populate part it will redirect to original footer and no data is saved
    const handleClose = (e) => {
        e.preventDefault()
        props.setText('')
        props.setText2("")
        props.sc(false)
        props.sc2(false)
    }
    // Function which handles what happens when user click done
    const handleDone=(e)=>{
        e.preventDefault();
        // Check whether user have provided correct data or not. Input data will be matched with te data stored in session storage
        if(m4!==sessionStorage.getItem("M4")){
            alert("Enter correct Ip address for machine 4!!")
            return
        }
        // All the host have mask bit 32 as they are directly connected to router
        if(sm1!=="32"){
            alert("Enter correct mask bits for machine 4. All the bits are used as it is a host!!")
            return
        }
        if(m5!==sessionStorage.getItem("M5")){
            alert("Enter correct Ip address for machine 5!!")
            return
        }
        if(sm2!=="32"){
            alert("Enter correct mask bits for machine 5. All the bits are used as it is a host!!")
            return
        }
        if(m6!==sessionStorage.getItem("M6")){
            alert("Enter correct Ip address for machine 6!!")
            return
        }
        if(sm3!=="32"){
            alert("Enter correct mask bits for machine 6. All the bits are used as it is a host!!")
            return
        }
        if(ni1!==sessionStorage.getItem("NI1")){
            alert("Enter correct Ip address for router 1!!")
            return
        }
        if(Number(sm4)!==Number(sessionStorage.getItem("SM"))+2){
            alert("Enter correct mask bits for router 1. There are three routers so 2 extra bits are required to specify subnet!!")
            return
        }
        if(ni3!==sessionStorage.getItem("NI3")){
            alert("Enter correct Ip address for router 3!!")
            return
        }
        if(Number(sm5)!==Number(sessionStorage.getItem("SM"))+2){
            alert("Enter correct mask bits for router 3. There are three routers so 2 extra bits are required to specify subnet!!")
            return
        }
        alert("Routing table populated!!")
        sessionStorage.setItem("P",true)
        props.setText('')
        props.setText2('')
        props.sc(false)
        props.sc2(false)
    }
    return (
        <>
            <h2>Fill up the Routing Table for router 2</h2>
            It will contain Ip address,net mask and port number of hosts and routers connected to router 2.<br /><br />
            <form action="" className='form-active'>
                <table>
                    <thead>
                        <tr className='headings'>
                            <td>IP Address</td>
                            <td>Subnet Mask</td>
                            <td>Port Number</td>
                        </tr>
                    </thead>
                </table>
                <div className='rt'>
                    <label className='label1'>Machine 4: </label>
                    <input type="text" value={m4} onChange={(e)=>{setm4(e.target.value)}} required/>
                    <input type="text" value={sm1} onChange={(e)=>{setsm1(e.target.value)}} required/>
                    <input type="text" value='1' style={{textAlign:'center'}} readOnly/>
                </div>
                <div className='rt'>
                    <label className='label1'>Machine 5: </label>
                    <input type="text" value={m5} onChange={(e)=>{setm5(e.target.value)}} required/>
                    <input type="text" value={sm2} onChange={(e)=>{setsm2(e.target.value)}} required/>
                    <input type="text" value='2' style={{textAlign:'center'}} readOnly/>
                </div>
                <div className='rt'>
                    <label className='label1'>Machine 6: </label>
                    <input type="text" value={m6} onChange={(e)=>{setm6(e.target.value)}} required/>
                    <input type="text" value={sm3} onChange={(e)=>{setsm3(e.target.value)}} required/>
                    <input type="text" value='3' style={{textAlign:'center'}} readOnly/>
                </div>
                <div className='rt'>
                    <label className='label2'>Router 1: </label>
                    <input type="text" value={ni1} onChange={(e)=>{setni1(e.target.value)}} required/>
                    <input type="text" value={sm4} onChange={(e)=>{setsm4(e.target.value)}} required/>
                    <input type="text" value='4' style={{textAlign:'center'}} readOnly/>
                </div>
                <div className='rt'>
                    <label className='label2'>Router 3: </label>
                    <input type="text" value={ni3} onChange={(e)=>{setni3(e.target.value)}} required/>
                    <input type="text" value={sm5} onChange={(e)=>{setsm5(e.target.value)}} required/>
                    <input type="text" value='5' style={{textAlign:'center'}} readOnly/>
                </div>
                <div className='rt'>
                    <button type='submit' className='bn-btn' onClick={handleClose}>Close</button>
                    <button type='submit' onClick={handleDone} className='bn-btn'>Done</button>
                </div>
            </form>
        </>
    );
}
export default Populate;