// Complete your server here!
// Do NOT `server.listen()` inside this file!
const express = require('express');
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

// Create Server
const server = express();

// User JSON
server.use(express.json());

// Routers
server.use(actionsRouter);
server.use(projectsRouter);

// Error Middleware
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong. Please try again later.",
  })
})

module.exports = server;
