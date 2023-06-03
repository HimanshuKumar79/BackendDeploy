const express = require("express");
const route = require("./routes/route");
const app = express();
app.use("/api/v1", route);
app.listen(8000, () => {
  console.log("Sercerts listening on 8000");
});
