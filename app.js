const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const nocache = require("nocache");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");

const app = express();

const cookie = {
    httpOnly: true,
    secure: process.env.ENV === 'PROD',
    maxAge: 10800000, //3 hours in milliseconds
    domain: process.env.DOMAIN || 'localhost',
    path: '/'
};

app.use(session({
    name: "session",
    secret: process.env.SESSION_SECRET || 'Eu&**ro9s08^f^hdS9MAdKrwmKCxhvLj&sVtfKOYmX$nf4H3pA61Mz^wEu&**ro9s08^f^hdS9MAdKrwmKCxhvLj&sVtfKOYmX$nf4H3pAAGNSW3Gfg%9kbw6HlP@PzT^lkJo7PAqQtaWI3wS3uy!u',
    genid: function () {
        return crypto.randomBytes(32).toString("hex");
    },
    resave: false,
    saveUninitialized: true,
    cookie: cookie
}));

app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

const options = {
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ["GET", "HEAD", "OPTIONS", "PUT", "PATCH", "POST", "DEL"],
    origin: true,
    preflightContinue: true,
};

app.use(cors(options));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, HEAD, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

app.set('etag', false)

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
});
//app.use(helmet());
app.use(nocache());
app.disable('X-Powered-By');
app.use(helmet.hidePoweredBy());
//app.use(helmet.contentSecurityPolicy());

// app.use((req, res, next) => {
//     if (req.path.endsWith("manifest.json") || req.session.idx || req.path === "/sso") {
//         return next();
//     }

//     if (!req.session.idx || !req.session.email) {
        
//     }

//     if (req.path.indexOf("/api/") > -1) {
//         return res.status(401).json({
//             status: "NO AUTH",
//             message: "You are not authorized to view this resource"
//         });
//     }

//     req.session.init_url = req.path;
//     res.redirect("/sso");
// });

app.keepAliveTimeout = 120 * 1000;
app.headersTimeout = 120 * 1000;
app.use("/assets", express.static(path.join(__dirname, "/assets"), options));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/index.html"));
});

app.get("/dashboard", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/dashboard.html"));
});

app.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/login.html"));
});

app.get("/story/:id", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/template/bostami-template/index - Copy.html"));
});

const db = require("./data");

app.get("/api/story/:id", async (req, res) => {
    const data = await db.story.getStory({ id: req.params.id });
    res.status(200).json(data);
});

app.get("/api/story/:id/words", async (req, res) => {
    const data = await db.storyWords.getStoryWords({ id: req.params.id });
    res.status(200).json(data);
});

app.all("*", (req, res) => {
    if (req.path.indexOf("/api/") > -1) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).json({
            status: "NOT FOUND",
            message: "The resource you are looking for does not exist"
        });
    } else {
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.status(404).sendFile(path.join(__dirname, "/src/web/404.html"));
    }
});

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'),() => {
    console.log("Server started on https...");
});
