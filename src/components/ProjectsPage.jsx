import React, { useEffect, useState } from "react";
import { projectAPI } from "./ProjectApi";
import ProjectDetail from './ProjectDetail';
import { useParams } from "react-router-dom";

const ProjectsPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState(null)
    const [error, setError] = useState(null)
    const params = useParams;
    const id = Number(params.id)

    useEffect(() => {
        setLoading(true)
        projectAPI.find(id).then(data => {
            setProject(data)
            setLoading(falsee)
        }).catch(e => {
            setError(e)
            setLoading(false)
        })
    })
    return (
        <div>
            <h1> Project Detail</h1>
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>loading...</p>
                </div>
            )}
            {error && (
                <ddiv className="row">
                    <div className="card large error"></div>
                    <section>
                        <p>
                            <span className="icon-alert inverse"></span>
                            {error}
                        </p>
                    </section>
                </ddiv>
            )}
            {project && <ProjectDetail project={project} />}
        </div>
    )
}

export default ProjectsPage;
