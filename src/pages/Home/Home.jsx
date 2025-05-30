import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const Data = useLoaderData();
    console.log(Data);
    return (
        <div>
            <Banner></Banner>
            <Books Data={Data}></Books>
        </div>
    );
};

export default Home;