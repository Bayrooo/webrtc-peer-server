
import express from "express";
import cors from "cors";
import { ExpressPeerServer } from "peer";

const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`Peer server on :${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: "/",
  debug: true,
  allow_discovery: true,
});

app.use("/peerjs", peerServer);
app.get("/", (_,res)=>res.send("PeerJS signaling server is running."));
