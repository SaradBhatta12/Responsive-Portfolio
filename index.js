const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const flash = require("connect-flash");
const session = require("express-session");
const app = express();

app.use(flash());
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { message: req.flash("success") });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saradbhatt2@gmail.com",
    pass: "zvqb gisn tcuz yrbi",
  },
});

app.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Sender's email address
    to: email, // Recipient's email address
    subject: "Portfolio Contacts ",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    req.flash("success", "Your message has been sent successfully!");
    res.redirect("/");
  });
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
