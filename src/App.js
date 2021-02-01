import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import axios from "./axios";

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(async () => {
        try {
            const res = await axios.get("/api/v1/messages/sync");
            console.log(res.data);
            setMessages(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }, []);

    useEffect(() => {
        const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
            cluster: "eu",
        });

        const channel = pusher.subscribe("message");
        channel.bind("inserted", function (message) {
            setMessages([...messages, message]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    return (
        <div className="app">
            <div className="app-body">
                <Sidebar />
                <Chat messages={messages} />
            </div>
        </div>
    );
}

export default App;
