const express = require('express');
const router = express.Router();
const controller = require('../../controllers/type.controller');

router.route('/')
    .get(controller.index)
    .post(controller.store)

module.exports = router