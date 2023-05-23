const express = require("express");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const cors = require("cors");
const functions = require ('firebase-functions');

const dotenv = require("dotenv");
const { userRoute, announcementRoute, messageRoute, commentRoute, assignmentRoute, submissionRoute, gradeRoute, courseRoute, feedbackRoute } = require("../routes/index.route");
dotenv.config();

const webApp = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin : "http://localhost:3000",
    // origin : '*'
} 


// Log requests to the console
webApp.use(morgan("dev"));
webApp.use(cors(corsOptions));
webApp.use(express.json());
webApp.use(express.urlencoded({ extended: true }));
webApp.use("/public", express.static("./public"));

webApp.get("/api", (req, res) => {
       res.send("Hello! The API is at http://localhost:" + PORT + "/api");
    }
);

webApp.use('../user',userRoute);
webApp.use('../comment',commentRoute);
webApp.use('../announcement',announcementRoute);
webApp.use('../message',messageRoute);
webApp.use('../assignment',assignmentRoute);
webApp.use('../submission',submissionRoute);
webApp.use('../grade',gradeRoute);
webApp.use('../course',courseRoute);
webApp.use('../feedback',feedbackRoute);


/*app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
    // connect to mongodb
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });
}
);*/

exports.webApp = functions.https.onRequest(webApp);

