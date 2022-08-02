import React, { useState } from 'react'
import  './ToDolist.css'
import Listoftodo from './Listoftodo';


export const ToDolist = () => {
    const [item, setitem] = useState("");
    const [readyitems, setreadyitems] = useState([]);

    const Itemslist =(e)=>{
        setitem(e.target.value);
    }
    const listofitem = ()=>{
        console.log("Clicked")

        setreadyitems((olditems)=>{
            return[...olditems, item];
        });
        setitem("");
    };
    const Deleteitems =(id) =>{
        console.log("deleted");
        setreadyitems((olditems)=>{
            return olditems.filter((arrElm, index)=>{
                return index !== id
            })
        })

    }
 
  return (
    <>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-5 d-flex '>
                    <input type='text' className='form-control' placeholder='Enter your Item Name' onChange={Itemslist}/>
                    <div className='btn-plus' > <button className='' onClick={listofitem}>+</button></div>
                    
                </div>
               
            </div>
            <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                <ul>
                        
                           { readyitems.map( (itemval, index) => {
                          return  <Listoftodo
                            text = {itemval}
                            key = {index}
                            id = {index}
                            onSelect = {Deleteitems}
                            />
                           
                            })}
                        
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default ToDolist;
