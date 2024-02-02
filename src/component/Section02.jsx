import React, { useState, useEffect } from 'react';
import '../styles/section02.css'; // Assuming 'section02.css' is in the same folder as this component
// import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Section02() {


    const navigate = useNavigate();
    const language = 'en-US';
    const page = 1;
    const apiKey = '29f518b0346538351b3a5c8759b881b1'; // Don't forget to replace with your actual API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}&api_key=${apiKey}`;
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjMxOGRkZTJiYTEzYzc0MzAyOGJjY2EzOTI1OGUzNyIsInN1YiI6IjY1OWQ2MDQzMjMxNjhjMDFhNTRhOGMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Lvg9vJdMe8woF0vitn6S9_80mg7Aju8nm0HB-rjSIg';



    const [dataRecord, setDataRecord] = useState({
        items: [],
        isLoaded: false,
    });

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const json = await response.json();

                setDataRecord({
                    isLoaded: true,
                    items: json.results || [], // Ensure that items is an array
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    function handleClick(){
        navigate("/movies");
    }


    if (!dataRecord.isLoaded) {
        return <div style={{ color: 'white' }}>Loading...</div>;
    }
    else {
        const { items } = dataRecord;
        // console.log(items);



        return (
            <div className='section02'>
                <div className="cardContainer">
                    {items.slice(0, 8).map(item => (
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt='img' className='card' key={item.id} onClick={handleClick}></img>
                    ))}
                </div>

            </div>
        );
    }
}
