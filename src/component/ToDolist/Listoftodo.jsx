import React from 'react'

export const Listoftodo = (props) => {

   
     return( 
        <>
        <div className='todolistitems'>
            <button className="btn-delete"
             onClick={()=>{
                props.onSelect(props.id);
            }}>-</button><li>{props.text}</li>
        </div>
             
        </>
       )
   
}
export default Listoftodo;