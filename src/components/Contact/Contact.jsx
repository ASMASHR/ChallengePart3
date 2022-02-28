import React, { useState,useEffect } from 'react'
import './Contact.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function Contact() {
      const [showTitle,setShowTile]=useState(true)
      let [msg,setMsg]=useState(false)
    const [userName,setuserName]=useState("")
    const [useremail,setuseremail]=useState("")
    const [MessageText,setMessageText]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if((userName!=="")&&(useremail!=="")&&(MessageText!==""))
{
        setMsg(true)
        setMessageText("")
        setuserName("")
        setuseremail("")}
        else
        alert("Please set your name, your email and your message !")
    }
    return (
        <div className="contactContainer">
         
        <div className='contact' id="contact">
            <h2>Contactez Nous</h2>
                <div className="coordonnees">
                    <div className="address"><LocationOnIcon className='Icon'/> <p>Siège social, Imm. El Emtiez. Centre Urbain Nord, 1003, Tunis.</p></div>   
                    <div className="Telephone"><LocalPhoneIcon className='Icon'/> <p>(+216) 71 238 729  /   (+216) 71 233342</p> </div>
                    <div className="Fax"><FaxIcon className='Icon'/><p>(+216) 71 234 411</p> </div> 
                    <div className="Email"><AlternateEmailIcon className='Icon'/><p> info@stbsicar.com.tn</p> </div> 
                </div>
            <div className="contactUs">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Votre Nom et Prénom' name="" id="" value={userName} onChange={(e)=>{setuserName(e.target.value)}} />
                        <input type="email" placeholder='Votre Email' name="" id=""  value={useremail}  onChange={(e)=>{ setuseremail(e.target.value)}} />
                        <textarea placeholder='Votre Message' name="" id="" cols="30" rows="10"  value={MessageText} onChange={(e)=>{setMessageText(e.target.value)}}></textarea>
                        <button type='Submit'>SUBMIT</button>
                        </form>
                        <div className="spn">
                        {msg && <span>Merci! nous allons vous contacter dés que possible :)</span>}
                        </div>
            </div>
        </div>
        </div>
    
    )
}

export default Contact
