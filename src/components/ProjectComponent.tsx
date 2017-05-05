import * as React from "react";
import {Project} from "../data";

export interface ProjectComponentProps {
    project: Project;
    open?: boolean;
}

export interface ProjectComponentState {
    open: boolean;
}

export class ProjectComponent extends React.Component<ProjectComponentProps, ProjectComponentState> {

    constructor(props: ProjectComponentProps) {
        super(props);
        this.state = {
            open: props.open !== void(0) ? props.open : true
        }
    }

    render() {
        const {project} = this.props;
        const {open} = this.state;

        const categories = Object.keys(project.technologies);

        return (<section>
            <div className="message" style={{marginBottom: '1.5rem'}}>
                <div className="message-header" style={{cursor: 'pointer'}} onClick={_ => this.setState({open: !this.state.open})}>
                    <p>{open ? '-' : '+'} {project.name}</p>
                    <p className="is-pulled-right">{project.duration}</p>
                </div>
                <div className="message-body content" style={{display: (open ? 'block' : 'none')}}>
                    <em>Impacts</em>
                    <ul>{project.impacts.map(impact => <li key={impact}>{impact}</li>)}</ul>

                    <div className="columns">
                        <div className="column">
                            <em>Responsibilities</em>
                            <ul>{ project.responsibilities.map(responsibility => <li
                                key={responsibility}>{responsibility}</li>) }</ul>
                        </div>
                        <div className="column">
                            <div className="message">
                                <div className="message-header">Technologies</div>
                                <div className="message-body">
                                    {
                                        categories.map((category, i) => {
                                            const techs = project.technologies[category];
                                            const separatingStyle = (i == 0 ? {} : {marginTop: '.75rem'});
                                            return (
                                                <div key={category} style={separatingStyle}>
                                                    <strong>{category}</strong>
                                                    <ul style={{marginTop: 0}}>
                                                        {
                                                            techs.map(tech => <li key={tech.name}>{tech.name} ({tech.usage})</li>)
                                                        }
                                                    </ul>
                                                </div>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}