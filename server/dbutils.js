const { MongoClient, ObjectId } = require('mongodb');
console.log('db',process.env.DBURL)
const url = process.env.DBURL
const dbClient = new MongoClient(url);

const findDB = async(db, collection, filter, sort) => {
    try {
      await dbClient.connect();
      const database = dbClient.db(db);
      const result = await database.collection(collection).find(filter).sort(sort).toArray();
      //console.log('find = ',db, collection, filter, result)
      return result
    }
    catch (error) {
      console.error(error);
    }
    finally {
      //await dbClient.close();
    }
}

const aggregateDB = async(db, collection, filter, sort) => {
    try {
        await dbClient.connect();
        const database = dbClient.db(db);
        const result = await database.collection(collection).aggregate(filter).toArray();
        //console.log('aggregate = ',db, collection, filter, result)
        return result
    }
    catch (error) {
        console.error(error);
    }
    finally {
        //await dbClient.close();
    }
}

const updateOneDB = async(dbname, collection, condition, data) => {
    try {
        await dbClient.connect()
        const result = await dbClient.db(dbname).collection(collection).updateOne(condition, data, { upsert: true });
        return result
    }
    catch (error) {
        console.error(error);
    }
    finally {
        //await dbClient.close();
    }
}

const addOneDB = async(dbname, collection, data) => {
    try {
        await dbClient.connect()
        const result = await dbClient.db(dbname).collection(collection).insertOne(data);
        return result
    }
    catch (error) {
        console.error(error);
    }
    finally {
        //await dbClient.close();
    }
}

const deleteOneDB = async(dbname, collection, condition) => {
    try {
        await dbClient.connect()
        const result = await dbClient.db(dbname).collection(collection).deleteOne(condition);
        return result
    } catch (error) {
        console.error(error);
    }
    finally {
        //await dbClient.close();
    }
  }
  
const updateManyDB = async(dbname, collection, condition, data) => {
    try {
        await dbClient.connect()
        const result = await dbClient.db(dbname).collection(collection).updateMany(condition, data);
        return result
    } catch (error) {
        console.error(error);
    }
    finally {
        //await dbClient.close();
    }
}
  
const deleteManyDB = async(dbname, collection, condition) => {
    try {
        await dbClient.connect()
        const result = await dbClient.db(dbname).collection(collection).deleteMany(condition);
        return result
    } catch (error) {
        console.error(error);
    }
    finally {
        //await dbClient.close();
    }
}

module.exports = { 
    dbClient, 
    ObjectId,
    findDB,
    aggregateDB,
    updateOneDB,
    updateManyDB,
    addOneDB,
    deleteOneDB,
    deleteManyDB,
}