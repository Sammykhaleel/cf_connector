const express = require("express");
const router = express.Router();

//@routw GET api/posts/test
//@description Test post route
//@acccess Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
