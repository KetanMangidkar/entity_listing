const app = require("./index");
const connect = require("./configs/db");


app.listen(9555, async function () {
    try {
        await connect();
        console.log("Server connected Successfully");
    } catch (err) {
        console.error({ err: err.messege });
    }
});