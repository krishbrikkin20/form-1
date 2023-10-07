const { Router } = require('express');
const { form1Controller } = require('../controller/fromController.js'); 

const router = Router();

router.post('/form1', form1Controller);

module.exports = router; 
