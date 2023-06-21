import React, {useEffect} from 'react';
import HeroError from "../components/HeroError";

const ErrorPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroError />
        </>
    );
};

export default ErrorPage;