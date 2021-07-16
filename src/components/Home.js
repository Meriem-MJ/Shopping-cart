import React from 'react'
import { BiTimer } from 'react-icons/bi'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { GiHandOk } from 'react-icons/gi'
import Particles from 'react-particles-js';
import particlesConfig from '../config/ParticlesConfig';

const Home = () => {
    return (
    <div className="all">
            <Particles params={particlesConfig} className="particles"></Particles>
        <div className="home">
            <h1>Welcome to MJ online Shop!</h1>
            <div className="container2">
                <h2>OUR MOTTO:</h2>
                <div className="container3">
                    <p>
                        FAST
                        <BiTimer />
                    </p>
                    <p>
                        CHEAP
                        <FaHandHoldingUsd />
                    </p>
                    <p>
                        TOP
                        <GiHandOk />
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home
