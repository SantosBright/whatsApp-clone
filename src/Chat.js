import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from "@material-ui/icons";
import "./Chat.css";

const Chat = () => {
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
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form action="">
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
        </div>
    );
};

export default Chat;
