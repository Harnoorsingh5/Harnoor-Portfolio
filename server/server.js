
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.use("/cat-cards/", express.static("client/build"))

const root = require('path').join(__dirname, '..', 'public')
app.use('https://harnoor-portfolio.herokuapp.com/', express.static(root));
//app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})


app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});