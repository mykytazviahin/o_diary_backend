import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConnection = () => {
    mongoose.connect(
        process.env.DB_CONNECTION || "", {}, () => console.log("Connected to DB")
    );
};

export { dbConnection };