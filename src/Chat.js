import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    SearchOutlined,
    MoreVert,
    InsertEmoticon,
    Mic,
} from "@material-ui/icons";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "./axios";
import "./Chat.css";

const Chat = ({ messages }) => {
    const [value, setValue] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        axios.post("/api/v1/messages/new", {
            message: value,
            name: "Santos Bright",
            recieved: false,
        });
        setValue("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <ScrollToBottom className="chat__body">
                {messages.map(({ name, message, recieved, timestamp, _id }) => (
                    <p
                        className={`chat__message ${!recieved && "chat__sent"}`}
                        key={_id}
                    >
                        <span className="chat__name">{name}</span>
                        {message}
                        <span className="chat__timestamp">
                            {new Date(timestamp).toUTCString()}
                        </span>
                    </p>
                ))}
            </ScrollToBottom>
            <div className="chat__footer">
                <InsertEmoticon />
                <form onSubmit={sendMessage}>
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        placeholder="Type a message"
                    />
                    <button type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    );
};

export default Chat;
