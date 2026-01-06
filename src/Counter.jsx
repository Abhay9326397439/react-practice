import { useState } from "react";

export default function Counter() {
    let [count,setCount]=useState(0);

    let increment= ()=>{
        setCount(count+1);
      }

      let Styles={
         backgroundColor: "blue",
      }

      return(
        <div>
            <h1>Counter app</h1>
            <h2> counter result: {count}</h2>
            <button  style={Styles} onClick={increment}>Increment</button>
        </div>
      );

}