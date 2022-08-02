import React from 'react'
import Sliderimg from '../../images/slider-1.png'

const Slider = () => {
    return (
        <>
            <section className="slider-section">
                <div id="carousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"><span>1</span> </li>
                        <li data-target="#carousel" data-slide-to="1">2</li>
                        <li data-target="#carousel" data-slide-to="2">3</li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style={{ backgroundImage: "url(" + { Sliderimg } + ")" }}>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row justify-content-end">
                                    <div className="col-md-5">
                                        <div className="custom-slider-caption">
                                            <h1 className="main-cursive-heading">Highly Concentrated</h1>
                                            <h2>UNLTD. Beer</h2>
                                            <p>Non-Alcoholic beers from around the world delivered to your doorstep every month</p>
                                            <a href="">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item " style={{ backgroundImage: "url('images/slider-1.png')" }}>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row justify-content-end">
                                    <div className="col-md-5">
                                        <div className="custom-slider-caption">
                                            <h1 className="main-cursive-heading">Highly Concentrated</h1>
                                            <h2>UNLTD. Beer</h2>
                                            <p>Non-Alcoholic beers from around the world delivered to your doorstep every month</p>
                                            <a href="">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item " style={{ backgroundImage: "url('images/slider-1.png')" }}>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row justify-content-end">
                                    <div className="col-md-5">
                                        <div className="custom-slider-caption">
                                            <h1 className="main-cursive-heading">Highly Concentrated</h1>
                                            <h2>UNLTD. Beer</h2>
                                            <p>Non-Alcoholic beers from around the world delivered to your doorstep every month</p>
                                            <a href="">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <a href="#carousel" className="carousel-control-prev" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a href="#carousel" className="carousel-control-next" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
            </section>
        </>

    )
}

export default Slider;
