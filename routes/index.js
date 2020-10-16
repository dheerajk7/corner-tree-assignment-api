const express = require("express");
const router = express.Router();
//accessing home controller
var jobController = require("../controllers/job_controller");

//routes
router.post("/api/v1/create-job", jobController.createJob);
router.get("/api/v1/search/:key", jobController.search);

module.exports = router;
