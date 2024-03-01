import React from "react";

const ProjectDetail = ({project}) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card large">
                    <img src={project.imageUrl} alt={projectAPI.name} className="rounded" />
                    <section className="section dark">
                        <h3 className="strong">
                            <strong>{projectAPI.name}</strong>
                        </h3>
                        <p>{project.description}</p>
                        <p>{project.budget}</p>
                        <p>Signed : {project.contractSignedOn}</p>
                        <p>
                            <mark className="active">
                                {" "}
                                {project.isActive ? "active" : inactive}
                            </mark>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;