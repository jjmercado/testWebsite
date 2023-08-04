import express from "express";
import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/new").post(UsersController.apiPostUser);
router.route("/:id")
        .get(UsersController.apiGetUser)
        .put(UsersController.apiUpdateUser)
        .delete(UsersController.apiDeleteUser)

export default router;