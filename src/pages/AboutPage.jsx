import React, {useEffect} from 'react';
import HeroAbout from "../components/HeroAbout";
import DetailsAbout from "../components/DetailsAbout";
import PropertiesAbout from "../components/PropertiesAbout";
import Companies from "../components/Companies";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
           <HeroAbout />
            <DetailsAbout />
            <PropertiesAbout />
            <Companies />
        </>
    );
};

export default AboutPage;