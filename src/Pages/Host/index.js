import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { fromString, uuid } from 'uuidv4';
import { uniqueNamesGenerator, adjectives, colors, starWars } from 'unique-names-generator';
import axios from 'axios';

const Host = ({history}) => {
    const [token, setToken] = useState('')
    const [loading, isLoading] = useState(false);

    const config  = {
        dictionaries: [adjectives, colors, starWars],
        separator: '-',
    }
    const name = history.location.state.name || "Host";
    const genRoom = uniqueNamesGenerator(config).split(" ")[0];
    const room = history.location.state.room.split(" ").join("-") || genRoom ;
    // let URL = window.URL || window.webkitURL;

    useEffect(() => {
        const generateLink = () => {
            const link = `${window.location.origin}/remote/${room}`;
            console.log(`sharable link: ${link}`, false);
        }
     const getAccessToken = async () => {
        try {
            isLoading(true);
            let response = await axios.get(`http://localhost:5000/generate-token/${room}/${name}`);
            let data = await response.data;
            setTimeout(() => {
                isLoading(false);
            }, 3000);
            setToken(data);
            generateLink();
        } catch(e) {
            console.error('Err', e);
        }
     }
      getAccessToken();
    }, [name, room]);

    
    return (
        <div>
            {loading? <div>....loading</div>: <div>diilol</div>}
        </div>
    )
}

export default withRouter(Host);
