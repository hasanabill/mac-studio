import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>Blogs</h1>
            <div className='qna-container'>
                <div>
                    <h2>What is Semantic Tag?</h2>
                    <p>When html was first created Every html elements were put inside <b>DIV</b> container. Because of that it was a little hard to read the code and understand which is which. With HTML5 release they introduced semantic elements. Now instead of <b>DIV</b> people use those semantic tags such as <b>article, table, header, footer, main, nav</b> etc. Because of these it became easier to read and understand code.</p>
                </div>
                <div>
                    <h2>What is Context Api?</h2>
                    <p>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they're passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;