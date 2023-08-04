import mongoDB, { ObjectId } from "mongodb";
const objectID = mongoDB.ObjectId;

let users;

export default class usersDAO {
    static async injectDB(conn)
    {
        if(users)
        {
            return;
        }

        try 
        {
            users = await conn.db("testData").collection("users");   
        } 
        catch (e) 
        {
            console.error(`Unable to establish collection handles in userDAO: ${e}`);
        }
    }

    static async addUser(firstname, lastname, email)
    {
        try 
        {
            const userDoc = {
                firstName: firstname,
                lastName: lastname,
                email: email,
            }    

            return await users.insertOne(userDoc);
        } catch (e) {
            console.error(`Unable to post user: ${e}`);
            return { error: e };
        }
    }

    static async getUser(userID)
    {
        try 
        {
            return await users.findOne({ _id: new ObjectId(userID) })    
        } 
        catch (e) 
        {
            console.error(`Unable to get user: ${e}`);
        }
    }

    static async updateUser(userID, firstName, lastName, email)
    {
        console.log("rev", userID);
        try 
        {
            const updateResponse = await users.updateOne(
                {
                    _id: new ObjectId(userID)
                },
                {
                    $set: { firstName: firstName, lastName: lastName, email: email }
                }
            );
            
            return updateResponse;
        } 
        catch (e) 
        {
            console.error(`Unable to update review: ${e}`);
            return { error: e };
        }
    }

    static async deleteUser(userID)
    {
        try 
        {
            const deleteResponse = await users.deleteOne(
                {
                    _id: new ObjectId(userID),
                }
            )    

            return deleteResponse;
        } 
        catch (e) 
        {
            console.error(`Unable to delete review: ${e}`);
            return { error: e };    
        }
    }
}