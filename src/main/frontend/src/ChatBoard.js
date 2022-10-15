import React from "react";

class ChatBoard extends React.Component {
    renderConnectBtn() {
        return (
            <ConnectBtn
                isConnect={this.props.isConnect}
                onClick={() => this.props.onConnectClick()}
            />
        );
    }

    renderDisconnectBtn() {
        return (
            <DisconnectBtn
                isConnect={this.props.isConnect}
                onClick={() => this.props.onDisconnectClick()}
            />
        );
    }

    renderSendBtn() {
        return (
            <SendMessageBtn
                onClick={() => this.props.onSendMessageClick()}
            />
        );
    }

    render() {
        return(
            <div>
                <div className="button_row">
                    <label>WebSocket connection:</label>
                    {this.renderConnectBtn()}
                    {this.renderDisconnectBtn()}
                </div>

                <div className="message_row">
                    <input type="text"/>
                    {this.renderSendBtn()}
                </div>
            </div>
        );
    }
}

function ConnectBtn(props) {
    // console.log("ConnectBtn=%o", props)

    return (
        <button
            className="btn_connect"
            onClick={props.onClick}
            disabled={props.isConnect}
        >
            Connect
        </button>
    )
}

function DisconnectBtn(props) {
    // console.log("DisconnectBtn=%o", props)

    return (
        <button
            className="btn_disconnect"
            onClick={props.onClick}
            disabled={!props.isConnect}
        >
            DisConnect
        </button>
    )
}

function SendMessageBtn(props) {
    return (
        <button
            className="btn_send"
            onClick={props.onClick}
        >
            Send
        </button>
    );
}
export default ChatBoard;