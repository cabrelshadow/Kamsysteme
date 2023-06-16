const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const http = require("http");
const session = require("express-session");
const passport = require("passport");
const { engine } = require("express-handlebars");
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use((err, req, res, next) => {
  // Handle the error
  res.status(500).json({ error: "Internal Server Error" });
});
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    maxAge: new Date(Date.now() + 3600000),
    //cookie: {secure: true, maxAge: 4 * 60 * 60 * 1000}
    //cookie: { secure: true },
    //store: MongoStore.create({mongoUrl: process.env.MONGODB_URI_CONNECT})
  }),
);

//app.use(passport.authenticate("session"));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/index"));
app.use("/settings", require("./routes/settings"));
const port = process.env.PORT || 8000;

http.createServer(app).listen(port, () => {
  console.log("Run server on port " + port);
});
