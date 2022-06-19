var router = require("express").Router();

router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
});

router.get("/routingTest", (req, res) => {
    res.send("routingTest2");
});

module.exports = router;