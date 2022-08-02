import React, { useState } from "react";


const Counter = () =>{
   

const [val, updateval]= useState(0);

const Updatecount = () =>{
    updateval(val + 1);

}
    return(
        <>
            <h1>{val}</h1>
           <button onClick={Updatecount}>Submit</button> 
        </>
    );
}


export  default Counter; 