const Roll =require('../models/Roll')
const { ObjectId } = require('mongodb');
exports.RollData = async (req, resp) => {
    try {
        console.log(req.body);
        const data = new Roll(req.body);
        const inserted = await data.save();
        console.log(`Data inserted: ${inserted}`);
        resp.status(201).send("Successfully inserted");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error saving credit data", error });
    }
};
exports.ShowRollData = async (req, resp) => {
    try {
        const data = await Roll.find({});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching credit data", error });
    }
};

exports.ShowRollDataById = async (req, resp) => {
    try {
        const id=req.params
        console.log(id)
        const data = await Roll.findOne({_id:new ObjectId(id)});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};

exports.UpdateRollData = async (req, resp) => {
    try {
        const {title,amount,quantity,_id}=req.body
        console.log(req.body);
        const data = await Roll.updateOne({'_id':new ObjectId(_id)},{$set:{'title':title,'amount':amount,'quantity':quantity}});
        
        console.log(`Data Updated: ${data}`);
        resp.status(201).send("Successfully Updated");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error saving Debit data", error });
    }
};

exports.DeleteRollDataById = async (req, resp) => {
    try {
        const id=req.params
        const data = await Roll.deleteOne({_id:new ObjectId(id)});
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};

exports.ShowRollDataByDate = async (req, resp) => {
    try {
        const {date}=req.params
        const tdate = new Date(date);
        const startOfDay = new Date(date); 
        startOfDay.setHours(0, 0, 0, 0);   
        const endOfDay = new Date(date);   
        endOfDay.setHours(23, 59, 59, 999); 
        const data = await Roll.find({ 
            createdAt: { 
              $gte: startOfDay, 
              $lte: endOfDay 
            } 
          });
          console.log(data)
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Roll data", error });
    }
};