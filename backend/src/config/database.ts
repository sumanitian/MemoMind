import mongoose from "mongoose";

const connectDataBase = async () => {
    try {
        const connectionUrl = process.env.MONGODB_CONNECTION_URL;
        if (!connectionUrl) {
            throw new Error(
                "Please define MONGODB_CONNECTION_URL in the environment variables."
            );
        }
         await mongoose.connect(connectionUrl);
         console.log("DataBase Connected Successfully");
    }
    catch (error) {
        console.log(error);
    }
};

export default connectDataBase;