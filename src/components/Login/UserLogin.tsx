import React, { useState,useEffect} from 'react';

export const UserLog :React.FC=()=> {
    interface Ilogin{
        username:string,
        password:string
    }
    const login:Ilogin={
        username:"",
        password:""
    }
    const[username,setUser]=useState('')
    const[password,setPass]=useState('')
    const handleUsername=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(event.target.value)
        // console.log("user",username)
    }
    const handlePassword=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setPass(event.target.value)
      
        console.log("pass",login.password)
    }
const handleSubmit=(e)=>{
    login.username=username
    login.password=password
    e.preventDefault()
    if(username=="" )
    {
        document.getElementById("error").innerText="please enter the username"
    }
    else if(password=="")
    {
        document.getElementById("error1").innerText="please enter the password"
    }
    else
    {
        console.log(login)
        localStorage.setItem("login",JSON.stringify(login))
        window.location.href="/todo"
    }


}
useEffect(()=>{
    let log= JSON.parse(localStorage.getItem("login"))
    setUser(log.username)
    setPass(log.password)
})
    

    
        return (
            <div>
                <form onSubmit={handleSubmit}> 
                    <input type="text" value={username} onChange={handleUsername}/><span id="error" style={{color:"red"}}></span><br/><br/>
                    
                    <input type="password" value={password} onChange={handlePassword}/><span id="error1" style={{color:"red"}}></span><br/>
                    
                    <button type="submit">login</button>
                </form>
            </div>
        );
    
}
