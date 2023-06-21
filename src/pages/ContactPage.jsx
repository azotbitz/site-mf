import React, {useEffect} from 'react';
import HeroContact from "../components/HeroContact";

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroContact />
        </>
    );
};

export default ContactPage;