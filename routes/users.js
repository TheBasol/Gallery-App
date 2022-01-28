const { Router } = require('express');
const { obtenerImg } = require('../controllers/api_controller');

const router = Router();

router.get('/', obtenerImg);


module.exports = router;