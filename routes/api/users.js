const express = require("express");
const router = express.Router();

//@routw GET api/users/test
//@description Test user route
//@acccess Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
