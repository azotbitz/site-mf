import React, {useEffect} from 'react';
import HeroNews from "../components/HeroNews";

const NewsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroNews />
        </>
    );
};

export default NewsPage;