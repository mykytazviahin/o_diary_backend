import dotenv from "dotenv";

dotenv.config()

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "defaultstring";
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const MONGO = {
    connection_string: MONGO_CONNECTION_STRING,
    options: MONGO_OPTIONS
}

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;