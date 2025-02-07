// src/websocketServer.ts
import WebSocket, { Server } from "ws";
import CONFIG from "./config/CONFIG";
import { MessageType } from "./types/chat";

const wss = new Server({ port: CONFIG.SOCKET_PORT });

const users = new Map<string, WebSocket>();

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message: string) => {
    const parsedMessage = JSON.parse(message);

    // Handle user registration
    if (parsedMessage.type === "register") {
      const { userId } = parsedMessage;
      users.set(userId, ws);
      console.log(`User registered: ${userId}`);
    }

    // Handle sending a message to a specific user
    if (parsedMessage.type === "private_message") {
      const message: MessageType | undefined = parsedMessage?.message;
      const receiver:string = parsedMessage?.receiver;
      if (message?._id &&receiver) {
        const recipientWs = users.get(receiver);
        if (recipientWs) {
          recipientWs.send(JSON.stringify({ message }));
        } else {
          console.log(`User ${message.sender} not found`);
        }
      }else{console.log('issue in data')}
    }
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log(
  `WebSocket server is running on ws://localhost:${CONFIG.SOCKET_PORT}`
);
