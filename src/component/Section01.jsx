import React, { useState, useEffect } from 'react';
import "../styles/section01.css";
import Navbar from './Navbar';
import Section01Container from './Section01Container';
import MoviePoster from './MoviePoster';
import CarousalCard from './CarousalCard';
import { top_rated, token } from '../apiLinks';

export default function Section01() {
    const apiUrl = top_rated;

    const [latest, setLatest] = useState({
        items: [],
        isLoaded: false,
    });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const response = await fetch(apiUrl, options);
                const json = await response.json();

                setLatest({
                    isLoaded: true,
                    items: json.results,
                    currentIndex: 4,
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    console.log("this is latest items");
    console.log(latest.isLoaded ? latest.items : "Loading...");

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % latest.items.length);
    };
    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % latest.items.length);
    };

    return (

        <div id='parent'>
            {latest.isLoaded ? (
                <div id='section01Child'>
                    <Navbar />
                    <div className="carousel">
                        <button className='switchBtn' onClick={prevCard}>Previous</button>
                        <CarousalCard movieId={latest.items[currentIndex].id} />
                        <button className='switchBtn' onClick={nextCard}>Next</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    );
}
