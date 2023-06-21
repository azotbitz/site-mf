import React, {useEffect} from 'react';
import Properties from "../components/Properties";
import Guide from "../components/Guide";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";


const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero />
            <Properties />
            <Guide />
            <Details />
            <GetStarted />
        </>
    );
};

export default HomePage;