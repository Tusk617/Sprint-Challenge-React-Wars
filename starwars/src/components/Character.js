import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard";

const Character = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response);
            setData(response.data.results);
            console.log(response.data.results);
        })
        .catch(error => {
            console.log("Sorry, something went wrong", error);
        })
    }, [])
        

    return (
        <div className="contentWrapper">
           {data.map(element => (
               <CharacterCard content = {element}/>
           ))}
        </div>
    )
}

export default Character;