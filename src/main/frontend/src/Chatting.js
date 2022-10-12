import React, {useEffect, useRef, useState} from 'react';
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import axios from 'axios';
import * as buffer from "buffer";


function Chatting() {
    const [message, setMessage] = useState('');
    const [buttonState, setButtonState] = useState(false);
    let stompClient;


    useEffect(() => {
    axios.get('/')
        .then(response => setMessage(response.data))
        .catch(error => console.log(error))
    }, []);

    function sendMessage() {
        // app/hello 와 연동
        this.stompClient.send("/room/1", {}, JSON.stringify({'message': 'hello'}));
    }

    function connect() {
        const socket = new SockJs('/chattingRoom')
        stompClient = StompJs.over(socket);

        // console.log("data=%o", buttonState);

        // connectRef.current.disable = true;
        // console.log("connectRef=%o", connectRef)
        // disconnectRef.current.disable = false;
        // console.log("disconnectRef=%o", disconnectRef)

        setButtonState(true);
        // console.log("data=%o", buttonState);

        stompClient.connect({}, () => {
            stompClient.subscribe('/room/1', (message) => {
                console.log("success subscribe");
                //  showGreeting(JSON.parse(greeting.body).message);
            });
        });
    }


    return (
        <div id="main-content">

            <div className="row">
                <div className="col-md-6">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="connect">WebSocket connection:</label>
                            <button id="connect" type="button" disabled={buttonState} onClick={connect}>Connect</button>
                            <button id="disconnect" type="button" disabled={!buttonState}>Disconnect</button>
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
                            <button id="send" className="btn btn-default" type="button" onClick={sendMessage}>Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Chatting;