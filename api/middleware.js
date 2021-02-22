const actions = require("./actions/actions-model");
const projects = require("./projects/projects-model");

function validateActionId() {
  return async (req, res, next) => {
      try {
         const action = actions.get(req.params.id)
              if (action) {
                  req.action = action;
                  next();
                } else {
                    res.status(404).json({message: "Action not found"});
                }
        } catch (err) {
            next(err);
        }
  }
}

function validateProjectId() {
    return async (req, res, next) => {
        try {
           const project = projects.get(req.params.id)
                if (project) {
                    req.action = project;
                    next();
                  } else {
                      res.status(404).json({message: "Project not found"});
                  }
          } catch (err) {
              next(err);
          }
    }
  }

function validateAction() {
  return async (req, res, next) => {
      try {
          const projectID = req.body.project_id;
          const desc = req.body.description;

          if (!projectID) {
            res.status(400).json({message: "No Project Found!"});
          }
          if (!desc) {
              res.status(400).json({message: "A description is required."})
          }
      } catch (err) {
            next(err);
      }
  }
}

function validateProject() {
    return async (req, res, next) => {
        try {
            const name = req.body.name;
            const desc = req.body.description;

            if (!name) {
              res.status(400).json({message: "Please include a Name for your project."});
            }
            if (!desc) {
                res.status(400).json({message: "A description is required."})
            }
        } catch (err) {
              next(err);
        }
    }
}

module.exports = {
  validateAction,
  validateProject,
  validateActionId,
  validateProjectId
}
