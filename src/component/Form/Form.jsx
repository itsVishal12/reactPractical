import React, { useState } from "react"
import "./Form.css";

const Form = () =>{

    const [firstname, setfirstname] = useState("");
    const [lasttname, setlastname] = useState("");
    const [firstFullname, firstsetFullname] = useState();
    const [LastFullname, LastsetFullname] = useState();
    const FirstInputval = (event) =>{
        setfirstname(event.target.value);
        console.log(event.target.value);
    }
    const LastInputval = (event) =>{
        setlastname(event.target.value);
        console.log(event.target.value);
    }

    const Formsubmit =(event)=>{
        LastsetFullname(lasttname);
        firstsetFullname(firstname);
        event.preventDefault();
    }
    
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={Formsubmit}>
                        <div className="form-custom">
                        <div className="form-Heading">Hi {firstFullname} {LastFullname}</div>
                        <input
                        placeholder="Please enter your Firstname"
                         type="text"
                          onChange={FirstInputval}
                          value={firstname}
                          />
                          <input
                            placeholder="Please enter your Lastname"
                            type="text"
                            onChange={LastInputval}

                          />
                            <button type="submit" className="btn w-50 d-block" >Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Form;