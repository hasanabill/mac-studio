import React from 'react';
import studio from '../../assets/studio.png'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='top-container'>
                <img src={studio} alt="" />
                <div className='docs-container'>
                    <h3>Looking for a new computer?</h3>
                    <h1>Check out the new Mac Studio</h1>
                    <p>The worlds most powerful compact computer. It's ever more powerful than the highest end Mac Pro</p>
                    <a target="_blank " href="https://www.apple.com/mac-studio/">Buy Now</a>
                </div>
            </div>
            <div className='reviews-container'>
                <h2>Reviews</h2>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Home;