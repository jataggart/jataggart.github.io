import * as React from "react";
import {data} from "../data";
import {ProjectComponent} from "./ProjectComponent";

export class ContentComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <main>
                <hr />
                <div id="experience">
                    {data.experience.map((exp, i) =>
                        <div key={`${exp.company}_${exp.title}`} style={{marginTop: (i != 0) ? '1.5rem': ''}}>
                            <h4 className="title is-4">{exp.title}</h4>
                            <h6 className="subtitle is-6">{exp.company}, {exp.start} - {exp.end || 'Present'}</h6>

                            {exp.projects && exp.projects.map(project => <ProjectComponent key={project.name} project={project} />)}
                        </div>
                    )}
                </div>
                <hr />
                <div id="education" style={{margin: '1.5rem 0 1.5rem 0'}}>
                    {data.education.map(edu => <div key={edu.school} className="columns">
                            <div className="column is-three-quarters">
                                <h4 className="title is-4">{edu.degree}, {edu.major}</h4>
                                <h6 className="subtitle is-6">{edu.school}</h6>
                            </div>
                            <div className="column">
                                <h6 className="title is-6">{edu.enrolled} - {edu.graduated}</h6>
                            </div>
                        </div>
                    )}
                </div>

            </main>
        )
    }
}