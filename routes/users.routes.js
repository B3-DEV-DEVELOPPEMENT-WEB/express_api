import express from "express";
import {FindUserById, FindUsers} from "../controllers/users.controller.js";

export const router = express.Router();

router.get("", (req, res) => {
    FindUsers(req, res);
});

router.get("/:id", (req, res) => {
    FindUserById(req, res);
});

// PUT
// POST
// PATCH
// DELETE
// GET
