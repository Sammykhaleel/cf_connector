const express = require("express");
const router = express.Router();

//@routw GET api/profile/test
//@description Test profile route
//@acccess Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
