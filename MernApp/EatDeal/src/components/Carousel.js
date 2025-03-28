import React from 'react'

export default function Carousel() {
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner " id='carousel'>
                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-primary" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" >
                        <img src="/Images/burger.jpg" className="d-block w-100  " style={{ filter: "brightness(40%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/pastry.jpg" className="d-block w-100 " style={{ filter: "brightness(40%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/barbeque.jpg" className="d-block w-100 " style={{ filter: "brightness(40%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}
