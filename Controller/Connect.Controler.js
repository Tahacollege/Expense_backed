const conn=require('../db')
exports.ConnectDb = async (req, resp) => {
    try {
         await conn()
          resp.send("database connected");
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: "Error Connecting To Db", error });
    }
};