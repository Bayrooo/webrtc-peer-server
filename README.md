
# WebRTC Peer Server
Simple PeerJS signaling server for the photo booth.

## Run locally
```bash
npm install
npm start
```
This serves at http://localhost:9000/peerjs

## Deploy
- Render/Railway/Glitch or any Node host.
- Expose HTTPS if possible.
- In the client set:
  NEXT_PUBLIC_PEER_SERVER=https://<your-server>/peerjs
