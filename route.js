import express from "express";
import { ErrorController, getAllBooksController, viewBookbyIdController } from "./controller.js";

const router = express.Router()

router.get("/books", getAllBooksController)
router.get("/books/:bookid", viewBookbyIdController)
router.use(ErrorController)

export default router
