const express = require('express');
const router = express.Router();
const DebitController=require('../Controller/Debit.Controler')
router.post('/insertdebit',DebitController.DebitData );
router.get('/getdebit',DebitController.ShowDebitData );
router.get('/getdebitdatabyid/:id',DebitController.ShowDebitDataById);
router.get('/getdebitbydate/:date',DebitController.ShowDebitDataByDate );
router.get('/getrolldata',DebitController.ShowRollData);
router.put('/updatedebit',DebitController.UpdateDebitData );
router.delete('/deletedebitbyid/:id',DebitController.DeleteDebitDataById );
module.exports=router