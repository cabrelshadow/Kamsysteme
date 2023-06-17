const passport = require("passport");
const db = require("../models");
const { hashSync } = require("bcryptjs");
const router = require("express").Router();

router.get("/login", (_, res) => {
  res.render("user/login");
});
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    successRedirect: "/users/redirectLogin",
  })(req, res, next);
});

/* router.get("/register", (req, res) => {
  res.render("user/register");
}); */

router.post("/add-user", async (req, res) => {
  if (Object.keys(req.body).length > 0) {
    const { nom, prenom, password, birthday, contact, id_role } = req.body;
    await db.User.create({
      nom: String(nom).toUpperCase(),
      prenom,
      contact,
      id_role,
      birthday,
      username: `${String(nom).toLowerCase()}-${String(prenom).toLowerCase()}`,
      password: hashSync(password, 10),
    });
    res.redirect(req.headers.referer);
  }
});

module.exports = router;
