const express = require('express');
const todosCtrl = require('../controllers/todos');
const router = express.Router();

router.get('/', todosCtrl.index);
router.get('/cat', todosCtrl.catPic);

router.get('/:id', todosCtrl.show);

// router.post('/', todosCtrl.create)

module.exports = router;

//todos/123