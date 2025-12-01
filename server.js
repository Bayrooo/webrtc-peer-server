// server.js
const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", true);

// Health
app.get("/", (_, res) => res.send("PeerJS signaling server is running."));

// HTTP server
const server = app.listen(PORT, () => {
  console.log(`Peer server on :${PORT}`);
});

// ✅ options.path = "/"  (жинхэнэ endpoint-ийг mount зам тодорхойлно)
const peerServer = ExpressPeerServer(server, {
  path: "/",               // ← энд ТАСАЛБАРААР "/" байх ёстой
  proxied: true,
  allow_discovery: true,
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// ✅ Эцсийн endpoint: "/peerjs"
app.use("/peerjs", peerServer);
