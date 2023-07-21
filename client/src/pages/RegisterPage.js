import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RegisterPage(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    async function register(ev){
        ev.preventDefault();
        const response=await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},

        })
        if(response.status!==200){
            alert('Registration failed!');
        }
        else{
            alert('Registration successful ;)');
            setRedirect(true);
            
        }
    }

    if(redirect) return( <Navigate to={"/"} />);
    return (
        <form className="Register" onSubmit={register}>
            <h1 className="postTitle">Register</h1>
            <input type="text" placeholder="Username" value = {username} onChange={ev=>setUserName(ev.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
    )
}