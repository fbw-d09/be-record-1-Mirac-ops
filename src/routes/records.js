const express = require('express');

const router = express.Router();

const records = require('../controllers');

router.route("api/records/:id")




.get(recordsController.getPost)
.put(recordsController.updatePost)
.delete(recordsController.deletePost);


module.exports = router;

