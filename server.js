const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const emailRouter = require("./routes/emailRoutes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/v1", emailRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
