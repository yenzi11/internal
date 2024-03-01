import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { computeHeadingLevel } from "@testing-library/react";

const ProjectList = ({ projects, onSave }) => {
  const [input, setInput] = useState("")
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  console.log(input);
  return (
    <>
        <input type="text" onChange={(e) => setInput(e.target.value.toLocaleLowerCase())}/>
      <div className="row">
        {projects.filter((item) => item?.name.toLocaleLowerCase().indexOf(input) > -1).map((project) => (
          <div key={projects.id} className="cols-sm">
            {project === projectBeingEdited ? (
              <ProjectForm
                onSave={onSave}
                onCancel={cancelEditing}
                project={project}
              />
            ) : (
              <ProjectCard project={project} onEdit={handleEdit} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
