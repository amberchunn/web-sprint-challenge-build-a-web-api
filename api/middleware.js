const projects = require("./projects/projects-model");

function validateProjectId() {
  return async (req, res, next) => {
    try {
        const project = await projects.get(req.params.id)
        if (project) {
                req.project = project;
                next();
            } else {
                res.status(404).json({message: "Project not found!"});
            }
        }
    catch (err) {
        next(err);
        }
    }
}

// do not forget to expose these functions to other modules
module.exports = {
  validateProjectId
}
