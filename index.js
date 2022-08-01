import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Header from './component/Header/Header';
import Slider from './component/slider/Slider';
// import Slider from './component/slider/Slider';
import reportWebVitals from './reportWebVitals';
import Card from './component/Netflix/Netflix';
import Sdata from './component/Sdata';
import Digitalclock from './component/digitalclock/Digitalclock';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <Header />

        {/* <div className='container'>
            <div className='row'>

                <h1>Hi Sir</h1>
                {Sdata.map((val, index) => {
                    return (
                        <Card
                            key={val.key}
                            tite={val.title}
                            sname={val.sname}
                            price={val.price}
                        />
                    )


                })}
            </div>
        </div> */}

    </>
);

