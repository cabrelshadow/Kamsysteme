const router = require("express").Router();
const db = require("../models");

router.get("/", async (_, res) => {
  const roles = await db.Role.findAll({ raw: true });
  const sections = await db.Section.findAll({ raw: true });
  const categories = await db.Categorie.findAll({ raw: true });
  const users = await db.User.findAll({
    include: ["Role", "Section"],
    raw: true,
  });
  res.render("settings/index", { roles, sections, categories, users });
});
router.post("/add-role", async (req, res, next) => {
  const { nom, isAdmin } = req.body;
  await db.Role.create({ name: nom, isAdmin })
    .then(() => {
      return res.redirect(req.headers.referer);
    })
    .catch((err) => {
      next(err);
    });
});
router.post("/edit-role/:id", async (req, res, next) => {
  const { nom, isAdmin } = req.body;
  await db.Role.update({ name: nom, isAdmin }, { where: { id: req.params.id } })
    .then(() => {
      return res.redirect(req.headers.referer);
    })
    .catch((err) => {
      next(err);
    });
});
router.post("/add-section", async (req, res, next) => {
  const { name } = req.body;
  await db.Section.create({ name })
    .then(() => {
      return res.redirect(req.headers.referer);
    })
    .catch((err) => {
      next(err);
    });
});
router.post("/edit-section/:id", async (req, res, next) => {
  const { name } = req.body;
  await db.Section.update({ name }, { where: { id: req.params.id } })
    .then(() => {
      return res.redirect(req.headers.referer);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
