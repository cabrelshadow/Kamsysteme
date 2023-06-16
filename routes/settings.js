const router = require("express").Router();

router.get("/", (_, res) => {
  res.render("settings/index");
});

module.exports = router;
