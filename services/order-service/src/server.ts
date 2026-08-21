import "dotenv/config";
import app from "./app";

app.listen(8081, ()=>{
    console.log("Server started");
})