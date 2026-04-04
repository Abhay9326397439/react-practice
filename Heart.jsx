import { useState } from "react";

export default function Heart(){
    let [liked,setLiked]=useState(false);
    let [count,setCount]=useState(0);
    let Styles={
        fontSize:"40px",
        color:"red",
    }
    let toggle=()=>{
        setLiked(!liked);
        setCount(count+2);
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "red", fontFamily: "Times New Roman", fontStyle: "italic" }}>This is a Heart Component Using State</h1><br></br>
            <p onClick={toggle}>
                <p style={{fontSize:"40px",color:"navy"}}>Counter={count}</p>
                { liked ?
                <i className="fa-solid fa-heart" style={Styles}></i> :
                <i className="fa-regular fa-heart" style={Styles}></i>
                }
            </p>
        </div>
    );
}