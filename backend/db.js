const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        const useDBAuth = process.env.USE_DB_AUTH || false;

        if (useDBAuth) {
            connectionParams.user = process.env.MONGO_USERNAME;
            connectionParams.pass = process.env.MONGO_PASSWORD;
        }

        // ✅ BEST PRACTICE VARIABLE
        const mongoURI = process.env.MONGODB_URI;

        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        await mongoose.connect(mongoURI, connectionParams);

        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};