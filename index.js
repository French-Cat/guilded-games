
const { Client } = require("guilded.js");
const { items } = require("./imports")
const JSONdb = require('simple-json-db');
const db = new JSONdb('db.json');
const client = new Client({ token: require("./config.json").token });
const digits_only = (string) => [...string].every(c => '0123456789'.includes(c));

if (!db.has('nmbr')) {
  db.set("nmbr", 0)
}

client.on("ready", () => console.log("Bot is successfully logged in"));

client.on("messageCreated", (message) => {
    if(message.raw.createdBy.includes("4vjDaxP4")) return;
    const cID = message.channelId
    if (cID == "c3097e61-b84b-4393-ab42-e372d876bd31") {
        return message.send(items[Math.floor(Math.random()*items.length)]);
    }
    if (cID == "938023de-4b5f-42ac-8d79-876d7c9f18ca") {
        if (!digits_only(message.content)) {
            message.delete()
            return
          }
          if (parseFloat(db.get("nmbr")) + 1 == parseFloat(message.content)) {
            db.set("nmbr", parseFloat(message.content))
          } else {
            message.delete()
          }
        return 
    }
    if (cID == "dde5d0f9-5248-484a-a9aa-d96ad234bba9") {
        if (message.content !== "|") {
            message.delete()
        }
        return;
    }
});

client.login()