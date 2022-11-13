import React from 'react';
import './HomeOutComes.css'
// import images
import VR from '../../Images/VR.jpeg'
const HomeOutCome = () => {
    return (
        <section id='home-outcomes'>
            <div className='container'>
                <div className="row">
                    {/* images area */}
                    <div className="col-md-6">
                        <img src={VR} className='img-fluid rounded-circle' alt="" />
                    </div>
                    {/* text area */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className='display-5 pb-3'>Explore the best courses of expertise professional with us</h1>
                            <p className='pt-3'>In a decentralized virtual world, the power to learn and impart knowledge does not belong to one but all.</p>
                            <strong>- Learn Without Limit Impact Report (2021)</strong><br />
                            <button className='btn btn-primary px-4 py-2 mt-5'>Join for Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOutCome;