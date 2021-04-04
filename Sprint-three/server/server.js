if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const videosRoutes = require("./routes/videos");

app.use(express.json());
app.use("/api/videos", videosRoutes);

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
