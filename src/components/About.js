import React from 'react';
import {FaHandPointDown} from 'react-icons/fa';

const About = () => {
    return (
    <div className="about">
        <h1>Welcome!</h1>
        <p> 
            Wondering why you would buy products from our website and not another or your local shop?
        </p>
        <p>Well! Here is why <FaHandPointDown/></p>
            <ol>
                <li>We are online! our products will reach your house quickly and safely! </li>
                <li>You will not pay any shipping costs! Isn't that awesome ?!</li>
                <li>Our products are the cheapest and the best!</li>
                <li>If you didn't like a product.. you can return it!</li>    
             </ol> 
    </div>
    )
}

export default About
