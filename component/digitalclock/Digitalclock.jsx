import React, { useState } from "react";
import "./Digitalclock.css"

let time = new Date().toLocaleTimeString();

const Digitalclock = () => {
    let [gtime, settime] = useState(time);

    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        settime(time);
    }
    setInterval(Updatetime, 1000)

    return (
        <>
            <div className="center-element">
                <h3>{gtime}</h3>
                <button onClick={Updatetime}>Submit</button>
            </div>
        </>
    );

}
export default Digitalclock;