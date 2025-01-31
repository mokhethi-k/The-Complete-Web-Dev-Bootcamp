import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    const today = new Date();

    const dayType = today.getDate();

    let type = "a weekday";
    let mess = "It's time to work hard"

    if (dayType === 0 || dayType=== 6){
        type = "the weekend";
        mess = "It's time to have some fun";
    }

    res.render("index.ejs", {
        typeOfDay: type,
        message: mess,
    });
});

app.listen(PORT, () => {
    console.log(`Listening from port ${PORT}`);
});