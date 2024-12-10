const express = require('express');
const router = express.Router();
const RollController=require('../Controller/Roll.Controler')
router.post('/insertroll',RollController.RollData );
router.get('/getroll',RollController.ShowRollData );
router.get('/getrolldatabyid/:id',RollController.ShowRollDataById);
router.get('/getrollbydate/:date',RollController.ShowRollDataByDate );
router.put('/updateroll',RollController.UpdateRollData );
router.delete('/deleterollbyid/:id',RollController.DeleteRollDataById );
module.exports=router