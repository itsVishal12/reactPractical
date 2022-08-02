import React, { useState } from "react";



// const [time, settime]= useState();

const Count = () =>{
    let newtime = new Date().toLocaleTimeString();
    const [time, settime]= useState(newtime);
   
    const Updatetime = ()=>{
        let newtime = new Date().toLocaleTimeString();
        settime(newtime);
    }
    return(
        <>
            <h1>{time}</h1>
           <button onClick={Updatetime}>Submit</button> 
        </>
    );
}



// const Count = () =>{
//     const submit =() =>{
//         let newtime = new Date().toTimeString();
//         let [curtime, settime]= useState(newtime);
       
//          return settime(newtime);
//     }

//     return (
        
//         <>
//             <h1>{curtime}</h1>
//             <button onClick={submit}></button>
//         </>
//     );
// }
export  default Count; 