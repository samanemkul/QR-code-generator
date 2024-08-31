import React, { useState } from "react";

const qrcode = () =>{
    const[url, setUrl] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        alert('ok')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="url" name="url" value={url} onChange={(e)=>setUrl(e.target.value)}placeholder="Enter your url" />
                <input type="submit" value="generate qr code" />
            </form>
            
        </div>
    )
}
export default qrcode