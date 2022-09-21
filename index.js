
const { Client } = require("guilded.js");

const client = new Client({ token: "TOKEN_HERE" });
client.on("ready", () => console.log("Bot is successfully logged in"));
client.on("messageCreated", (message) => {
    if (message.content === "test") {
        return message.send("poggers!");
    }
});
client.login()