import usersDAO from "../dao/usersDAO.js";

export default class UsersController 
{
    static async apiPostUser(req, res, next)
    {
        try 
        {
            const firstname = req.body.firstName;
            const lastname = req.body.lastName;
            const email = req.body.email;
            
            const userRespons = await usersDAO.addUser(
                firstname,
                lastname,
                email
            )
            res.json({ status: "success" });
        } 
        catch (err) 
        {
            res.status(500).json({ error: err.message });
        }
    }

    static async apiGetUser(req, res, next)
    {
        try 
        {
            let id = req.params.id || {};
            let user = await usersDAO.getUser(id);
            
            if (!user) 
            {
                res.status(404).json({ error: "Not stupid user found" })
                return;    
            }
            res.json(user);
        } 
        catch (err) 
        {
            console.log(`api, ${err}`);
            res.status(500).json({ error: err });
        }
    }

    static async apiUpdateUser(req, res, next)
    {
        try 
        {
            const userID = req.params.id;
            const firstname = req.body.firstName;
            const lastname = req.body.lastName;
            const email = req.body.email;
            
            const userResponse = await usersDAO.updateUser(
                userID,
                firstname,
                lastname,
                email
            )
    
            let { error } = userResponse;
            if (error) 
            {
                res. status(400).json({error});    
            }
    
            if (userResponse.modifiedCount === 0)
            {
                 throw new Error(
                    "Unable to update user",
                 )
            }
    
            res.json({ status: "success" });
        } 
        catch (e) 
        {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiDeleteUser(req, res, next)
    {
        try 
        {
            const userID = req.params.id;
            const userResponse = await usersDAO.deleteUser(userID);
            res.json({ status: "success" });    
        } 
        catch (e) 
        {
            res.status(500).json({ error: e.message });    
        }
    }
}