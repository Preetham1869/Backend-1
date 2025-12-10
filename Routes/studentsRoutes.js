import express from 'express';
import { getStudents, addStudent } from "../Controller/studentsController.js";
const router = express.Router();
router.get('/get-students', getStudents);
router.post('/add-student', addStudent);
export default router;