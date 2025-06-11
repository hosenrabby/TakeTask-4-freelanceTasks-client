import React from 'react';
import Slider from './Slider';
import FeturedTask from './FeturedTask';
import HowItWorks from './HowItWorks';
import PricingPans from './PricingPans';
import { useLoaderData } from 'react-router';
const Home = () => {
    const { taskData, category } = useLoaderData();
    return (
        <>
            <title>Take Task | Home</title>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <FeturedTask taskData={taskData} category={category}></FeturedTask>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <PricingPans></PricingPans>
            </section>
        </>
    );
};

export default Home;