import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg1.jpg" className="card-img" alt="background" height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>


                </div>
            </div>
            <Product/>
        </div>
    )
}

export default Home
