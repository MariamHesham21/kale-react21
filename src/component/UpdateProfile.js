import React,{Fragment ,useEffect, useState} from 'react'
 
import Nav from "./Navbar"
import Footer from "./Footer";

import * as userServices from '../services/userServices';
const userService = userServices.default

    const UpdateProfile =()=>{
        const [data,setData] = useState([])
        
        // const[email,setEmail] = useState("")
        // const [first_name,setfirst_name] = useState("")
        // const [last_name,setlast_name] = useState("")
        // const [username,setusername] = useState("")
        // const [birthdata,setbirthdata] = useState("")



        useEffect(()=>{
            getData();
          },[])
    

        function getData(){
            userService.userProfile().then((res)=>{
              setData(res.data.data);
              console.log("res",res.data.data)
            })
          }

        // function change_profile(email,first_name,last_name,username,birthdata){
        //     userService.userProfileUpdate(email,first_name,last_name,username,birthdata).then((res)=>{
        //         console.log(res.data)
        //     })
        // }

    return (
        <Fragment>
        <Nav/>
        <div className="update-profile">
            <div className="titel">
                <h1> Update <span>Profile</span></h1>
            </div>
            <div className="update-profile-contant">
                <ul>
                <label>Email: </label>
                    <input 
                    type="email" 
                    value={data.email}
                    // onChange={(e)=>setEmail(e.target.value)}
                    /><br/>

                    <label>First Name: </label>
                    <input 
                    type="text" 
                    value={data.first_name}
                    // onChange={(e)=>setfirst_name(e.target.value)}
                    placeholder="new first name"
                    /><br/>

                    <label>last Name: </label>
                    <input 
                    type="text" 
                    value={data.last_name}
                    // onChange={(e)=>setlast_name(e.target.value)}
                    /><br/>

                    <label>User Name: </label>
                    <input 
                    type="text" 
                    value={data.username}
                    // onChange={(e)=>setusername(e.target.value)}

                    /> <br/>

                    <label> Date Of Birth:  </label>
                    <input type="date" 
                    value={data.birthdate}
                    // onChange={(e)=>setbirthdata(e.target.value)}

                    />
                </ul>
                <button className="btn"
                 type="submit" 
                // onClick={()=>change_profile()}
                >Update</button>

            </div>
        </div>
        <Footer/>
        </Fragment>
    )

}





export default UpdateProfile;