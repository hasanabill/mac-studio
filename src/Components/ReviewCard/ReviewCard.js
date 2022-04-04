import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className='review-card'>

            <h2>{name}</h2>
            <h4>Rating: {rating} stars out of 5</h4>
            <p>{comment}</p>

        </div>
    );
};

export default ReviewCard;