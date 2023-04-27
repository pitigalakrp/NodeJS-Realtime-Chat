const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username:username, secret:username, first_name:username},
        {headers:{"private-key":"ecf100de-fe12-402f-92f3-79bf9e7be79b"}}
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(e.response.status).json(e.response.data)
  }

  return res.json({ username: username, secret: "1234..." });
});



app.listen(3001);