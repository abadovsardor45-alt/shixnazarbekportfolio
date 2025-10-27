function sendMessageToTelegram(){
    const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

const TOKEN = "8217345093:AAHAyjoWAj-x-oFljn3NqIGcD5SOFogikWc"; // BotFather dan olingan token
const CHAT_ID = "6203325402"; // Sizning Telegram ID (pastda topish yo‘li bor)

app.use(cors());
app.use(express.json());

// POST /send endpoint
app.send("text", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const text = `
📩 Yangi xabar portfoliodan!
👤 Ism: ${name}
📧 Email: ${email}
📌 Mavzu: ${subject}
💬 Xabar: ${message}
`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
  });

  res.json({ success: true });
});

app.listen(3000, () => console.log("Server 3000-portda ishlamoqda"));

}