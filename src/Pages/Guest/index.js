import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import Bubble from '../../Component/Bubble';
import { uuid } from 'uuidv4';
import axios from 'axios';
import Loading from '../../Atom/Loading';
import {HostStyle} from "../Host";
const socket = io("http://localhost:5000");

const Guest = ({history, match}) => {
    
    const guest = history.location.state?.name;
    const roomFromLink = match.params.id;
    const identity = uuid();
    const [token, setToken] = useState('');
    const [loading, isLoading] = useState(false);
    const [chat, setChat] = useState("");
    const [messages, setMessages] = useState([]);



    if(guest === undefined){
        history.push("/404");
    }

    useEffect(() => {
     const getAccessToken = async () => {
        try {
            isLoading(true);
            let response = await axios.get(`http://localhost:5000/generate-token/${roomFromLink}/${guest}`);
            let data = await response.data;
            setTimeout(() => {
                isLoading(false);
            }, 3000);
            setToken(data);
        } catch(e) {
            console.error('Err', e);
        }
     }
      getAccessToken();
        socket.emit('joinRoom', {
            room: roomFromLink,
            username: guest,
        });
    }, [guest, roomFromLink]);


    const handleSubmit = (e) => {
        e.preventDefault();
        sendChatMessage(chat);
        setChat("");
    }

    const handleChatChange = (e) => {
        setChat(e.target.value);
    }

    const sendChatMessage = (message) => {
        socket.emit('sendChatMessage', {
          room: roomFromLink,
          username: guest,
          message,
        });
        
        socket.on('message', ({username, message, alert}) => {
            let side ="";
            if(guest=== username){
                side = "right";
            }else{
                side = "left";
            }
            let query = {
                name: username,
                side,
                message,
                alert,
            }
            setMessages(messages => messages.concat(query))
        });
    }


    return (
        <>
            <div style={{display:"flex", justifyContent:"flex-end", padding:"20px", alignItems: "center"}} className="name-holder">
                <div>
                    <i className="far fa-user icon-color" style={{paddingRight: "5px", display: "inline-block"}}></i>
                    <b>{guest}</b>
                </div>
            </div>
            <HostStyle>
                {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="video-section">
                        hello video to watch
                    </div>
                    <div className="chat-section">
                       <div className="chat-holder">
                           <section className="msger">
                                <header className="msger-header">
                                    <div className="msger-header-title">
                                    <i className="fas fa-comment-alt"></i> LivZ
                                    </div>
                                </header>

                                <main className="msger-chat">
                                    {
                                        messages.map((x, i) => (
                                            <Bubble name={x.name} side={x.side} message={x.message} alert={x.alert} key={i}/>
                                        ))
                                    }
                                </main>

                                <form className="msger-inputarea">
                                    <input type="text" value={chat} onChange={handleChatChange} className="msger-input" placeholder="Enter your message..."/>
                                    <button onClick={handleSubmit} className="msger-send-btn">Send</button>
                                </form>
                            </section>
                       </div>
                    </div>
                </>
            )}
            </HostStyle>
           </>
    )
}

export default Guest
