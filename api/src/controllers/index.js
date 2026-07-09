const { Router } = require('express');
const events = require('./events.controller');
const { errors } = require("../middlewares")
const router = Router();

// Events CRUD
router.get('/events', events.list);
router.post('/events', events.create);



module.exports = router;
