import React, { Fragment, useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import Project from "./Project";
import { projectAPI } from "./ProjectApi";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage] = useState(1);



  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, [currentPage]);

  const saveProject = (project) => {
    projectAPI
    .put(project)
    .then((updatedProject) => {
      let updatedProjects = projects.map((p) => {
        return p.id === project.id ? new Project(updatedProject) : p;
      });
      setProjects(updatedProjects);
    });
  };

  return (
    <Fragment>
      <h1 style={{color: "white"}}>Our Menu</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse"></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList onSave={saveProject} projects={projects} />

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>loading...</p>
        </div>
      )}
    </Fragment>
  );
};

export default ProjectPage;
