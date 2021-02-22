// Write your "actions" router here!
const express = require('express');
const actions = require('../actions/actions-model');
const { validateProjectId } = require('../middleware');
const router = express.Router();

const apiRoot = 'api';

// Get All Actions
router.get(`/${apiRoot}/actions`, async (req, res, next) => {
    try {
        const data = await actions.get();
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Get Specific Action
router.get(`/${apiRoot}/actions/:id`, async (req, res, next) => {
    try {
        const data = await actions.get(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Post New Action
router.post(`/${apiRoot}/actions`, validateProjectId(), async (req, res, next) => {
    try {
        const data = await actions.insert(req.body);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
})

// Update Existing Action
router.put(`/${apiRoot}/actions/:id`, async (req, res, next) => {
    try {
        const data = await actions.update(req.params.id, req.body);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
})

// Delete Action
router.delete(`/${apiRoot}/actions/:id`, async (req, res, next) => {
    try {
        await actions.remove(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
})

module.exports = router;
