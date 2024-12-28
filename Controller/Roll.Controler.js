const Roll =require('../models/Roll')
const Debit=require("../models/Debit")
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
        resp.status(200).send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Roll data", error });
    }
};

exports.ShowRollsDataByDate = async (req, resp) => {
    try {
        const dates_arr=[];
        const rdata = await Debit.find({ 
            "title": "New Roll"
        }).select('createdAt -_id');
          rdata.map((item)=>{
            const tdate = new Date(item.createdAt);
            dates_arr.push(tdate)
          })
          
        const {date}=req.params
        const tdate = new Date(date);
        console.log(dates_arr)
        console.log(`Date = ${date}`)
        const index=dates_arr.findIndex(date => date.getTime() === tdate.getTime())
        if(index==1){
            const startOfDay = new Date(date);  
            const endOfDay = new Date(dates_arr[0]);   
            console.log(`Date 1= ${startOfDay}`)
            console.log(`Date 0= ${endOfDay}`)
            const data = await Roll.find({ 
            createdAt: { 
              $gte: startOfDay, 
              $lte: endOfDay 
            } 
          });
          console.log(data)
        resp.status(200).send(data);
        }
        else if(index==0){
            const startOfDay = new Date(date);  
            const endOfDay = new Date(dates_arr[1]);   
            console.log(`Date 1= ${startOfDay}`)
            console.log(`Date 0= ${endOfDay}`)
            const data = await Roll.find({ 
            createdAt: { 
              $gte: startOfDay, 
            } 
          });
          console.log(data)
        resp.status(200).send(data);
        }
        console.log(index)
         
        
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error fetching Debit data", error });
    }
};