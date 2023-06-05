import React from "react";

function ProjectItem({ name, about, technologies }) {
const projectTechnology = technologies.map((technology, index) => {
  return <span key={index}>{technology}</span>;
})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {projectTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;
