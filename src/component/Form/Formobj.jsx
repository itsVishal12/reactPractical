import React, { useState } from "react"
import "./Form.css";

const Formobj = () =>{

    const [fullname, setfullname] = useState({
        fname : "",
        lname : "",
        email : "",
    });

    const inputevent = (event) =>{
        // setfullname(event.target.value);
        console.log(event.target.value);
        console.log(event.target.name);

        const name = event.target.name;
        const value = event.target.value;

        setfullname((previousval) => {

            if (name === "fname"){
                return{
                    fname: value,
                    lname: previousval.lname,
                    email: previousval.email,
                };    
        }
        
                else if (name === "lname"){
                    return {
                        fname: previousval.lname,
                        lname: value,
                        email: previousval.email,
                    }    
            }

                else if (name === "email"){
                    return{
                        fname: previousval.lname,
                        lname: previousval.lname,
                        email: value,
                    }
            }
        
    });

    }
   
    const Formsubmit =(event)=>{
        event.preventDefault();
    }
    
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={Formsubmit}>
                        <div className="form-custom">
                        <div className="form-Heading">Hi {fullname.fname} {fullname.lname}</div>
                        <div>{fullname.email}</div>
                        <input
                        placeholder="Please enter your Firstname"
                         type="text"
                         name="fname"
                          onChange={inputevent}
                          value={fullname.fname}
                          />
                          <input
                            placeholder="Please enter your Lastname"
                            name="lname"
                            type="text"
                            onChange={inputevent}
                            value={fullname.lname}
                          />
                          <input
                            placeholder="Please enter your Email"
                            name="email"
                            type="email"
                            onChange={inputevent}
                            value={fullname.email}
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
export default Formobj;