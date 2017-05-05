import * as React from "react";
import {data} from "../data";

export class HeaderComponent extends React.Component<any, any> {
    render() {
        return (
            <header className="columns">
                <div className="column">
                    <h1 className="title is-1">{data.meta.name}</h1>
                </div>
                <div className="narrow-column has-text-right">
                    <div className="box" style={{boxShadow: 'none'}}>
                        {data.meta.contact.email}
                    </div>
                </div>
            </header>
        )
    }
}