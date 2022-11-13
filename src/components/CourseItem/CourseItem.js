import React from 'react';
//for showing star rating . it's shows some error on console but work properly
import StarRatings from 'react-star-ratings';




const CourseItem = (props) => {
    //destrure props from course 
    const { title, institute, rating, totalRate, lebel, price, imgUrl, pdf} = props.course;
    const { handleDetails, course } = props;
   
    
    return (
        <div className='row course-container border-bottom my-4'>
            <div className='align-items-center my-3'>
                <div>
                <img height={220} width={220} style={{ alignSelf: 'center' }}  src={imgUrl} alt="" />
                {/* <button className='btn btn-primary m-2' onClick={() => window.location.href = "https://chat.whatsapp.com/GkTqZEkhDl0DRf6dVZDL7r"}>Join Whatsapp</button> */}
                <button className='btn btn-primary m-5' onClick={() => window.location.href = "https://discord.gg/Rgfmhjhh"}>Join Discord</button>
                </div>
                <div className='w-100'>
                    <h1>{title}</h1>
                    <p><small>Offer by: {institute}</small></p>
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
                            <h6>Lebel: {lebel}</h6>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <p><strong>Course Fee:</strong> INR{price}</p>
                    <button className='btn btn-primary' onClick={() => handleDetails(course)}>More Details</button>
                    <a style={{background: '#1484f5', color:'white',width:'100px', height: '138px',padding:'9px 9px 9px 9px',margin: '35px',font:'400 15px system-ui',borderRadius: '5px'}} href={pdf}>PDF</a>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;
