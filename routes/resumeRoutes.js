import express from "express";
import { analyzeResume, quickAnalyzeResume } from "../controllers/resumeController.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/resume/analyze:
 *   post:
 *     summary: Full resume analysis
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *                 description: Resume file
 *     responses:
 *       200:
 *         description: Resume analyzed successfully
 */
router.post("/analyze", upload.single("resume"), analyzeResume);

/**
 * @swagger
 * /api/resume/quick-analyze:
 *   post:
 *     summary: Quick resume analysis (Score, Role Fit, Strengths, Weaknesses)
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *                 description: Resume file
 *     responses:
 *       200:
 *         description: Quick analysis returned successfully
 */
router.post("/quick-analyze", upload.single("resume"), quickAnalyzeResume);

export default router;
