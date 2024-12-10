const Debit =require('../models/Debit')
const { ObjectId } = require('mongodb');
exports.DebitData = async (req, resp) => {
    try {
        console.log(req.body);
        const data = new Debit(req.body);
        const inserted = await data.save();
        console.log(`Data inserted: ${inserted}`);
        resp.status(201).send("Successfully inserted");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error saving Debit data", error });
    }
};
exports.ShowDebitData = async (req, resp) => {
    try {
        const data = await Debit.find({});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};

exports.ShowDebitDataById = async (req, resp) => {
    try {
        const id=req.params
        console.log(id)
        const data = await Debit.findOne({_id:new ObjectId(id)});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};

exports.UpdateDebitData = async (req, resp) => {
    try {
        const {title,amount,quantity,_id}=req.body
        console.log(req.body);
        const data = await Debit.updateOne({'_id':new ObjectId(_id)},{$set:{'title':title,'amount':amount,'quantity':quantity}});
        
        console.log(`Data Updated: ${data}`);
        resp.status(201).send("Successfully Updated");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error saving Debit data", error });
    }
};

exports.DeleteDebitDataById = async (req, resp) => {
    try {
        const id=req.params
        const data = await Debit.deleteOne({_id:new ObjectId(id)});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};

exports.ShowDebitDataByDate = async (req, resp) => {
    try {
        const {date}=req.params
        const tdate = new Date(date);
        const startOfDay = new Date(date); 
        startOfDay.setHours(0, 0, 0, 0);   
        const endOfDay = new Date(date);   
        endOfDay.setHours(23, 59, 59, 999); 
        const data = await Debit.find({ 
            createdAt: { 
              $gte: startOfDay, 
              $lte: endOfDay 
            } 
          });
          console.log(data)
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};