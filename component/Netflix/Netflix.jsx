import React from 'react';
import "./Netflix.css";

const Card = (props) => {
    return (
        <>

            <div class="col-md-4">
                <div class="inner-non-alcholic-custom">
                    <div class="custom-border-can">

                    </div>
                    <div class="text-area-non">
                        <p>{props.key}</p>
                        <h3>{props.title}</h3>
                        <h4>{props.sname}</h4>
                        <div class="price">{props.price}</div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;