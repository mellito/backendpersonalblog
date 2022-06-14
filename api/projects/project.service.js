const ProjectModel = require("./project.model");

async function getProjects() {
  const projects = await ProjectModel.find();
  return projects;
}
module.exports = { getProjects };
