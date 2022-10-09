import React, {useEffect, useState} from 'react';
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import axios from 'axios';


function connect() {
    const socket = new SockJs('/chattingRoom');
    const stompClient = StompJs.over(socket);

    stompClient.connect({}, () => {
        stompClient.subscribe('/topic/greetings', (data) => {
            console.log("success subscribe");
        });
    });
}

function Chatting() {
    const [message, setMessage] = useState('');

    useEffect(() => {
    axios.get('/')
        .then(response => setMessage(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div id="main-content">

            <div className="row">
                <div className="col-md-6">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="connect">WebSocket connection:</label>
                            <button id="connect" type="button"onClick={connect}>Connect</button>
                            <button id="disconnect" type="button" disabled="disabled">Disconnect</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table id="conversation" className="table table-striped">
                        <thead>
                        <tr>
                            <th>Greetings</th>
                        </tr>
                        </thead>
                        <tbody id="greetings">
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <form className="form-inline">
                        <div className="form-group">
                            <input type="text" id="name" className="form-control" placeholder="Your name here..."></input>
                        </div>
                        <button id="send" className="btn btn-default" type="submit">Send</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Chatting;