// Write your "projects" router here!
const express = require('express');
const projects = require('../projects/projects-model');

const router = express.Router();

const apiRoot = process.env.API_ROOT;


// Get All Projects
router.get(`/${apiRoot}/projects`, async (req, res, next) => {
    try {
        const data = await projects.get();
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Get Specific Project
router.get(`/${apiRoot}/projects/:id`, async (req, res, next) => {
    try {
        const data = await projects.get(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Get a Project's Actions
router.get(`/${apiRoot}/projects/:id/actions`, async (req, res, next) => {
    try {
        const data = await projects.getProjectActions(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Add New Project
router.post(`/${apiRoot}/projects`, async (req, res, next) => {
    try {
        const data = await projects.insert(req.body);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
})

// Update Project
router.put(`/${apiRoot}/projects/:id`, async (req, res, next) => {
    try {
        const data = await projects.update(req.params.id, req.body);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Delete Project
router.delete(`/${apiRoot}/projects/:id`, async (req, res, next) => {
    try {
        await projects.remove(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
})

module.exports = router;
