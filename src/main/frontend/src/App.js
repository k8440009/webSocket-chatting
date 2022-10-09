import React from "react";
import axios from 'axios';

function App() {
    return (
        <div id="main-content">

            <div className="row">
                <div className="col-md-6">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="connect">WebSocket connection:</label>
                            <button id="connect" type="submit">Connect</button>
                            <button id="disconnect" type="submit" disabled="disabled">Disconnect</button>
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

// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// function App() {
//   const [hello, setHello] = useState('')
//
//   useEffect(() => {
//     axios.get('/api/hello')
//         .then(response => setHello(response.data))
//         .catch(error => console.log(error))
//   }, []);
//
//   return (
//       <div>
//         백엔드에서 가져온 데이터입니다 : {hello}
//       </div>
//   );
// }

export default App;