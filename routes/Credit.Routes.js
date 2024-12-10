const express = require('express');
const router = express.Router();
const CreditController=require('../Controller/Credit.Controler')
router.post('/insertcredit',CreditController.CreditData );
router.get('/getcredit',CreditController.ShowCreditData );
router.get('/getcreditbyid/:id',CreditController.ShowCreditDataById );
router.get('/getcreditbydate/:date',CreditController.ShowCreditDataByDate );
router.put('/updatecredit',CreditController.UpdateCreditData );
router.delete('/deletecreditbyid/:id',CreditController.DeleteCreditDataById );
module.exports=router