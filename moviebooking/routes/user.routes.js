module.exports = app => {
  const users = require("../controllers/user.controller.js");

  const router = require("express").Router();

  // User Authentication Routes
  router.post("/auth/signup", users.signup);
  router.post("/auth/login", users.login);
  router.post("/auth/logout", users.logout);

  // User Actions Routes
  router.get("/getCouponCode", users.getCouponCode);
  router.post("/bookShow", users.bookShow);

  // Base URL: /api
  app.use("/api", router);
};
