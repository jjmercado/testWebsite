import app from "./server.js";
import mongoDB from "mongodb";
import usersDAO from "./dao/usersDAO.js";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = mongoDB.MongoClient;
const uri = process.env.MONGO_DB_URL;
const port = 80;

mongoClient.connect(uri, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
}).catch(error => {
    console.error(error.stack);
    process.exit(1);
}).then(async client => {
    await usersDAO.injectDB(client)
    app.listen(port, "192.168.178.43", () => {
        console.log(`Listening on port ${port}`);
    });
});