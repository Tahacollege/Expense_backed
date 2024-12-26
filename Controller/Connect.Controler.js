const conn=require('../db')
exports.ConnectDb = async (req, resp) => {
    try {
         var data=await conn
          resp.send(data);
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error Connecting To Db", error });
    }
};