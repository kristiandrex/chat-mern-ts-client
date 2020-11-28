import io from "socket.io-client";

let instance;

function connect() {
    if (!instance) {
        const token = localStorage.getItem("token");

        instance = io.connect({
            path: "/api/socket",
            query: { token }
        });
    }

    return instance;
}

function disconnect() {
    instance.disconnect();
    return instance = null;
}

const socket = {
    connect,
    disconnect
};

export default socket;