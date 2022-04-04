import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className='review-container'>
            <h2>{name}</h2>
            <p>{comment}</p>
            <h5>Rating: {rating} stars</h5>
        </div>
    );
};

export default Review;