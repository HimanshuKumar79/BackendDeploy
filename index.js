const express = require("express");
const route = require("./routes/route");
const app = express();
const cors=require("cors")
mongoose.set("striceQurey",true)
app.use("/api/v1", route);
app.use(cors())
app.listen(8000, () => {
  console.log("Sercerts listening on 8000");
});
