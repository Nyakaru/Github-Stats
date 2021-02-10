//@ts-check
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

import routes from "./routeHandler";

const app = express();
const mongoURI =
  "mongodb+srv://nyaks:N4aN3OuA6sy0IYP7@stock-manager-bha5c.mongodb.net/test?retryWrites=true&w=majority";

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    limit: "100mb",
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

const connect = mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected......"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Welcome to the journey of many dreams! 🚀",
  });
});

routes(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
