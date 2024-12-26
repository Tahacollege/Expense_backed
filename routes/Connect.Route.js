const express = require('express');
const router = express.Router();
const ConnectController=require('../Controller/Connect.Controler')
router.get('/connectDb',ConnectController.ConnectDb );
module.exports=router