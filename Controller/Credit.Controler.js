const Credit =require('../models/Credit')
const { ObjectId } = require('mongodb');
exports.CreditData = async (req, resp) => {
    try {
        console.log(req.body);
        const data = new Credit(req.body);
        const inserted = await data.save();
        console.log(`Data inserted: ${inserted}`);
        resp.status(201).send("Successfully inserted");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error saving credit data", error });
    }
};
exports.ShowCreditData = async (req, resp) => {
    try {
        const data = await Credit.find({});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching credit data", error });
    }
};

exports.ShowCreditDataById = async (req, resp) => {
    try {
        const id=req.params
        const data = await Credit.findOne({_id:new ObjectId(id)});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching credit data", error });
    }
};

exports.UpdateCreditData = async (req, resp) => {
    try {
        const {title,amount,quantity,_id}=req.body
        console.log(req.body);
        const data = await Credit.updateOne({'_id':new ObjectId(_id)},{$set:{'title':title,'amount':amount,'quantity':quantity}});
        
        console.log(`Data Updated: ${data}`);
        resp.status(201).send("Successfully Updated");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error saving credit data", error });
    }
};

exports.DeleteCreditDataById = async (req, resp) => {
    try {
        const id=req.params
        const data = await Credit.deleteOne({_id:new ObjectId(id)});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching credit data", error });
    }
};

exports.ShowCreditDataByDate = async (req, resp) => {
    try {
        const {date}=req.params
        const tdate = new Date(date);
        const startOfDay = new Date(date); 
        startOfDay.setHours(0, 0, 0, 0);   
        const endOfDay = new Date(date);   
        endOfDay.setHours(23, 59, 59, 999); 
        const data = await Credit.find({ 
            createdAt: { 
              $gte: startOfDay, 
              $lte: endOfDay 
            } 
          });
          console.log(data)
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching credit data", error });
    }
};