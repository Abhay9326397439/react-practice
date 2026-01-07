import { useState } from "react";

export default function Heart(){
    let [liked,setLiked]=useState(false);
    let Styles={
        fontSize:"40px",
    }
    let toggle=()=>{
        setLiked(!liked);
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "red", fontFamily: "Times New Roman", fontStyle: "italic" }}>This is a Heart Component Using State</h1><br></br>
            <p onClick={toggle}>
                { liked ?
                <i class="fa-solid fa-heart"style={Styles}></i> :
                <i className="fa-regular fa-heart" style={Styles}></i>
                }
            </p>
        </div>
    );
}