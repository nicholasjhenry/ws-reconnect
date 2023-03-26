import {Socket} from "phoenix"

let socket = new Socket("/socket", {params: {token: window.userToken}})

socket.connect()

let channel = socket.channel("ping", {})
let messagesContainer = document.querySelector("#messages")

channel.on("test", resp => {
  console.log("receive", resp)

  let messageItem = document.createElement("p")
  messageItem.innerText = `[${Date()}] ${resp.data}`
  messagesContainer.appendChild(messageItem)
})

channel.join()
  .receive("ok", resp => { console.log("Joined 'ping' successfully", resp) })
  .receive("error", resp => { console.log("Unable to join 'ping'", resp) })

console.log("send ping")

channel.push("ping", {})
  .receive("ok", (resp) => { console.log("receive", resp.ping) })

export default socket
