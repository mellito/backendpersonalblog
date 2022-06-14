const { getProjects } = require("./project.service.js");

async function getAllprojects(req, res) {
  try {
    const projects = await getProjects();
    res.status(200).json({ status: 200, data: projects });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
}

module.exports = { getAllprojects };
